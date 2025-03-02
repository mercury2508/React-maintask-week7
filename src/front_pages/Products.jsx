import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link } from "react-router-dom";
import ScreenLoading from "../componunts/ScreenLoading";
import { LoadingContext } from "../LoadingContext";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiPath = import.meta.env.VITE_API_PATH;

function Products() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { isScreenLoading, setIsScreenLoading } = useContext(LoadingContext);

    useEffect(() => {
        const getProducts = async () => {
            setIsScreenLoading(true);
            try {
                const res = await axios.get(
                    `${baseUrl}/api/${apiPath}/products`
                );
                setProducts(res.data.products);
            } catch (error) {
                showSwalError("取得產品失敗", error.response?.data?.message);
            } finally {
                setIsScreenLoading(false);
            }
        };
        getProducts();
    }, []);

    // 加入購物車
    const addToCart = async (product, qty = 1) => {
        setIsLoading(true);
        const productData = {
            data: {
                product_id: product.id,
                qty: Number(qty),
            },
        };
        try {
            await axios.post(`${baseUrl}/api/${apiPath}/cart`, productData);
            showSwal("已加入購物車");
        } catch (error) {
            showSwalError("加入購物車失敗", error.response?.data?.message);
        } finally {
            setIsLoading(false);
        }
    };

    // sweetalert成功提示
    const showSwal = (text) => {
        withReactContent(Swal).fire({
            title: text,
            icon: "success",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            width: "20%",
        });
    };

    // sweetalert錯誤提示
    const showSwalError = (text, error) => {
        withReactContent(Swal).fire({
            title: text,
            text: error,
            icon: "error",
        });
    };

    return (
        <>
            <div className="container">
                <div className="mt-4">
                    <table className="table align-middle">
                        <thead>
                            <tr>
                                <th>圖片</th>
                                <th>商品名稱</th>
                                <th>價格</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td style={{ width: "200px" }}>
                                        <img
                                            className="img-fluid"
                                            src={product.imageUrl}
                                            alt={product.title}
                                        />
                                    </td>
                                    <td>{product.title}</td>
                                    <td>
                                        <del className="h6">
                                            原價{" "}
                                            {product.origin_price.toLocaleString()}{" "}
                                            元
                                        </del>
                                        <div className="h5">
                                            特價{" "}
                                            {product.price.toLocaleString()}元
                                        </div>
                                    </td>
                                    <td>
                                        <div className="btn-group btn-group-sm">
                                            <Link
                                                to={`/products/${product.id}`}
                                                className="btn btn-outline-secondary"
                                            >
                                                查看更多
                                            </Link>
                                            <button
                                                type="button"
                                                className="btn btn-primary d-flex align-items-center gap-2"
                                                onClick={() =>
                                                    addToCart(product)
                                                }
                                                disabled={isLoading}
                                            >
                                                加到購物車
                                                {isLoading && (
                                                    <ReactLoading
                                                        type={"spokes"}
                                                        color={"#000"}
                                                        height={"1rem"}
                                                        width={"1rem"}
                                                    />
                                                )}
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {isScreenLoading && <ScreenLoading />}
            </div>
        </>
    );
}

export default Products;
