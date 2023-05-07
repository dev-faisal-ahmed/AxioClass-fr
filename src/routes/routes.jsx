import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { LoginPage } from "../components/component_page/login_page/LoginPage";
// import { FeesAndWaiver } from "../pages/fees_and_waiver/FeesAndWaiver";

export const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/classes", element: <h1>Classes</h1> },
  { path: "/routine", element: <h1>Routine</h1> },
  { path: "/login", element: <LoginPage/> },
  // { path: "/fees-and-waiver", element: <FeesAndWaiver /> },
]);
