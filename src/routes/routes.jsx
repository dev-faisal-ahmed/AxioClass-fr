import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import FeesAndWaiver from "../pages/fees_and_waiver/FeesAndWaiver";
import StudentProfile from "../components/page_components/student_profile/StudentProfile";
import Login from "../pages/login/Login";
import AdminFeesPage from "../components/page_components/admin_fees/AdminFeesPage";
import AddStudent from "../pages/admin/addStudent/AddStudent";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/fees-and-waiver", element: <FeesAndWaiver /> },
  { path: "/student-info", element: <StudentProfile /> },
  { path: "/login", element: <Login /> },
  { path: "/addStudent", element: <AddStudent /> },
  { path: "/fees", element: <AdminFeesPage /> },
]);
