import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import FeesAndWaiver from "../pages/fees_and_waiver/FeesAndWaiver";
import Login from "../pages/login/Login";
import AddStudent from "../pages/admin/addStudent/AddStudent";
import AddNotice from "../pages/admin/addNotice/AddNotice";
import LoginProvider from "../components/shared/guard/LoginProvider";
import Error404 from "../components/shared/Error404";
import StudentProfile from "../pages/admin/student/StudentProfile";
import AddTeacher from "../pages/addTeacher/AddTeacher";
import AdminFeesPage from "../pages/admin/admin_fees_page/AdminFeesPage";
import Courses from "../pages/student/courses/Courses";
import TeacherDocumentPdf from "../pages/admin/teacher_document/TeacherDocumentPdf";
import StudentDocumentPdf from "../pages/admin/student_document/StudentDocumentPdf";
import Classes from "../pages/classes/Classes";
import Settings from "../pages/settings/Settings";
import StudentIdProvider from "../context_api/StudentIdProvider";
import Classroom from "../pages/admin/classroom/Classroom";
import ClassRoomUI from "../pages/admin/classroom/ClassRoomUI";
import Students from "../pages/admin/students/Students";
import TeacherData from "../components/page_components/teacherData/TeacherData";
import Teacher from "../pages/admin/teacher/Teacher";

const wrapperFunction = (component) => {
  return <LoginProvider>{component}</LoginProvider>;
};

export const routes = createBrowserRouter([
  {
    path: "/",
    element: wrapperFunction(<Home />),
  },
  {
    path: "/courses",
    element: wrapperFunction(<Courses />),
  },
  {
    path: "/classes",
    element: wrapperFunction(<Classes />),
  },
  {
    path: "/fees-and-waiver",
    element: wrapperFunction(<FeesAndWaiver />),
  },
  {
    path: "/settings",
    element: wrapperFunction(<Settings />),
  },
  {
    path: "/student-info/:id",
    element: wrapperFunction(
      <StudentIdProvider>
        <StudentProfile />
      </StudentIdProvider>
    ),
  },
  { path: "/login", element: <Login /> },
  {
    path: "/add-student",
    element: wrapperFunction(<AddStudent />),
  },
  {
    path: "/student",
    element: wrapperFunction(<Students />),
  },
  {
    path: "/add-teacher",
    element: wrapperFunction(<AddTeacher />),
  },
  {
    path: "/teacher",
    element: wrapperFunction(<Teacher />),
  },
  {
    path: "/teacher-document/:id",
    element: wrapperFunction(<TeacherDocumentPdf />),
  },
  {
    path: "/student-document/:id",
    element: wrapperFunction(<StudentDocumentPdf />),
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
    path: "/classroom",
    element: wrapperFunction(<Classroom />),
  },
  {
    path: "/classroom/:id",
    element: wrapperFunction(<ClassRoomUI />),
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
