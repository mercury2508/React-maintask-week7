// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/index.jsx";

const router = createHashRouter(routes);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  // </StrictMode>
);
