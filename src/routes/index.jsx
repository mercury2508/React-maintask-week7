import FrontLayout from "../layouts/FrontLayout";
import Home from "../front_pages/Home";
import Products from "../front_pages/Products";
import ProductDetail from "../front_pages/ProductDetail";
import Cart from "../front_pages/Cart";
import LoginPage from "../front_pages/Login";

import AdminLayout from "../layouts/AdminLayout";
import AdminProducts from "../admin_pages/AdminProducts";

import NotFound from "../front_pages/NotFound";

const routes = [
    {
        path: "/",
        element: <FrontLayout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "products",
                element: <Products />,
            },
            {
                path: "products/:id",
                element: <ProductDetail />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
        ],
    },
    {
        path: "admin",
        element: <AdminLayout />,
        children: [
            {
                path: "",
                element: <AdminProducts />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
];

export default routes;
