import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { FeesAndWaiver } from "../pages/fees_and_waiver/FeesAndWaiver";
import { Login } from "../pages/login/Login";

export const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/classes", element: <h1>Classes</h1> },
  { path: "/routine", element: <h1>Routine</h1> },
  { path: "/login", element: <Login /> },
  { path: "/fees-and-waiver", element: <FeesAndWaiver /> },
]);
