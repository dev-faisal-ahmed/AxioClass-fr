import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import FeesAndWaiver from "../pages/fees_and_waiver/FeesAndWaiver";
import StudentProfile from "../components/page_components/student_profile/StudentProfile";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/fees-and-waiver", element: <FeesAndWaiver /> },
  { path: "/student-info", element: <StudentProfile /> },
]);
