import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register";
import { Layout } from "../components/templates";
import NotFound from "../pages/NotFound";
import DashboardAdmin from "../pages/Admin/DashboardAdmin";
import TentangKami from "../pages/TentangKami";
import DaftarTempat from "../pages/Daftar Tempat/DaftarTempat";
import ReviewGambar from "../pages/Daftar Tempat/ReviewGambar";
import KontakKami from "../pages/KontakKami";
import Profile from "../pages/Profile/Profile";
import EditProfile from "../pages/EditProfile/EditProfile";
import UserAdmin from "../pages/Admin/UserAdmin";

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
      {
        path: "/daftar-tempat",
        element: <DaftarTempat />,
      },
      {
        path: "/kontak",
        element: <KontakKami />,
      },
      {
        path: "/review-gambar",
        element: <ReviewGambar />,
      },
      {
        path: "/profile", // Tambahkan path untuk halaman profil
        element: <Profile />,
      },
      {
        path: "/edit-profile", 
        element: <EditProfile />,
      },
    ],
  },
  {
    path: "/admin",
    element: <DashboardAdmin />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },

  {
    path: "/user-admin",
    element: <UserAdmin />
  }

]);

export default router;
