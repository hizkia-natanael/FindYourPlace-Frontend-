import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import { Layout } from "../components/templates";
import NotFound from "../pages/NotFound";
import DashboardAdmin from "../pages/Admin/DashboardAdmin";
import TentangKami from "../pages/TentangKami";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/tentang-kami",  
        element: <TentangKami />, 
      },
    ],
  },
  {
    path: "/admin",
    element: <DashboardAdmin />,
  },
]);

export default router;
