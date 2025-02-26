import FrontLayout from "../layouts/FrontLayout";
import ProductsPage from "../front_pages/ProductsPage";
import Home from "../front_pages/HomePage";
import ProductDetailPage from "../front_pages/ProductDetailpage";
import Cart from "../front_pages/CartPage";
import LoginPage from "../front_pages/LoginPage";
import NotFound from "../front_pages/NotFoundPage";
import AdminLayout from "../layouts/AdminLayout";
import AdminProductsPage from "../admin_pages/AdminProductsPage";

const routes = [
    {
        path: "/",
        element: <FrontLayout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "products",
                element: <ProductsPage />
            },
            {
                path: "products/:id",
                element: <ProductDetailPage />
            },
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "login",
                element: <LoginPage />
            },
        ]
    },
    {
        path: "admin",
        element: <AdminLayout />,
        children: [
            {
                path:"",
                element: <AdminProductsPage />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
]

export default routes;