import { createHashRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
const router = createHashRouter(routes);

import { useState } from "react";
import { LoadingContext } from "./LoadingContext";

function App() {
    const [isScreenLoading, setIsScreenLoading] = useState(false);

    return (
        <LoadingContext.Provider
            value={{ isScreenLoading, setIsScreenLoading }}
        >
            <RouterProvider router={router} />
        </LoadingContext.Provider>
    );
}

export default App;
