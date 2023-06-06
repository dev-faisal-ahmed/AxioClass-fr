import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import FeesAndWaiver from "../pages/fees_and_waiver/FeesAndWaiver";
import Login from "../pages/login/Login";
import AdminFeesPage from "../components/page_components/admin_fees/AdminFeesPage";
import AddStudent from "../pages/admin/addStudent/AddStudent";
import AddNotice from "../pages/admin/addNotice/AddNotice";
import LoginProvider from "../components/shared/guard/LoginProvider";
import Error404 from "../components/shared/Error404";
import StudentProfile from "../pages/admin/student/StudentProfile";
import PrintPdf from "../pages/admin/student_document/PrintPdf";

const wrapperFunction = (component) => {
  return <LoginProvider>{component}</LoginProvider>;
};

export const routes = createBrowserRouter([
  {
    path: "/",
    element: wrapperFunction(<Home />),
  },
  {
    path: "/fees-and-waiver",
    element: wrapperFunction(<FeesAndWaiver />),
  },
  {
    path: "/student-info/:key",
    element: wrapperFunction(<StudentProfile />),
  },
  { path: "/login", element: <Login /> },
  {
    path: "/add-student",
    element: wrapperFunction(<AddStudent />),
  },
  {
    path: "/student-document/:id",
    element: wrapperFunction(<PrintPdf />),
  },
  {
    path: "/fees",
    element: wrapperFunction(<AdminFeesPage />),
  },
  {
    path: "/add-notice",
    element: wrapperFunction(<AddNotice />),
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
