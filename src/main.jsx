import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="container mx-auto">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
