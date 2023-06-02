import { user } from "../../fake_data/user";
import AdminLayout from "../../layout/AdminLayout";
import GlobalLayout from "../../layout/GlobalLayout";
import { DashboardAdmin } from "../admin/dashboard/DashboardAdmin";
import Dashboard from "../dashboard/Dashboard";
import DashboardSidebar from "../dashboard/DashboardSidebar";

const Home = () => {
  if (user.role === "student")
    return <GlobalLayout body={<Dashboard />} side={<DashboardSidebar />} />;
  else if (user.role === "admin")
    return <AdminLayout body={<DashboardAdmin />} pageName={"Dashboard"} />;
};

export default Home;
