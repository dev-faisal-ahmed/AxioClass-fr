import AdminLayout from '../../layout/AdminLayout';
import GlobalLayout from '../../layout/GlobalLayout';
import { DashboardAdmin } from '../admin/dashboard/DashboardAdmin';
import Dashboard from '../dashboard/Dashboard';
import DashboardSidebar from '../dashboard/DashboardSidebar';
import { getLocalUser } from '../../utils/localStorage';
import TeacherLayout from '../../layout/TeacherLayout';
import TeacherDashboard from '../teacher/dashboard/TeacherDashboard';

const Home = () => {
  const { role } = getLocalUser();
  console.log('This is the role: ', role);
  if (role === 'student')
    return (
      <GlobalLayout
        pageName={'Dashboard'}
        body={<Dashboard />}
        side={<DashboardSidebar />}
      />
    );
  else if (role === 'admin')
    return (
      <AdminLayout pageName={'Dashboard'}>
        <DashboardAdmin />
      </AdminLayout>
    );
  else if (role === 'teacher') {
    return (
      <TeacherLayout pageName={'Dashboard'}>
        <TeacherDashboard />
      </TeacherLayout>
    );
  }
};

export default Home;
