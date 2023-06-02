import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import FeesAndWaiver from '../pages/fees_and_waiver/FeesAndWaiver';
import GlobalLayout from '../layout/global_layout/GlobalLayout';
import Dashboard from '../pages/dashboard/Dashboard';
import DashboardSidebar from '../pages/dashboard/DashboardSidebar';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <GlobalLayout body={<Dashboard />} side={<DashboardSidebar />} />,
  },
  { path: '/fees-and-waiver', element: <FeesAndWaiver /> },
]);
