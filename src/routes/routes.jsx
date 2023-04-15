import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";

export const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/classes", element: <h1>Classes</h1> },
  { path: "/routine", element: <h1>Routine</h1> },
]);
