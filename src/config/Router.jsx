import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login/LoginPage";
import { Layout } from "../components/templates";
import NotFound from "../pages/NotFound";
import DashboardAdmin from "../pages/Admin/DashboardAdmin";
import TentangKami from "../pages/TentangKami";
import DaftarTempat from "../pages/Daftar Tempat/DaftarTempat";
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
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/tentang-kami",  
        element: <TentangKami />, 
      },
      {
        path: "/daftar-tempat",
        element: <DaftarTempat />, 
      },
    ],
  },
  {
    path: "/admin",
    element: <DashboardAdmin />,
  },
]);

export default router;
