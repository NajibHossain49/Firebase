import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [{
      path: "/",
      element: <Home/>
    },]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);