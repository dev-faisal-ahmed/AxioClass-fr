import AdminLayout from "../../layout/AdminLayout";
import GlobalLayout from "../../layout/GlobalLayout";
import { DashboardAdmin } from "../admin/dashboard/DashboardAdmin";
import Dashboard from "../dashboard/Dashboard";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import { getLocalUser } from "../../utils/localStorage";

const Home = () => {
  const { role } = getLocalUser();
  if (role === "student")
    return <GlobalLayout pageName={"Dashboard"} body={<Dashboard />} side={<DashboardSidebar />} />;
  else if (role === "admin")
    return (
      <AdminLayout pageName={"Dashboard"}>
        <DashboardAdmin />
      </AdminLayout>
    );
};

export default Home;
