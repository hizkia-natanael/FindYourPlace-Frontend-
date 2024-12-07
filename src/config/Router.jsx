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
import ReviewAdmin from "../pages/Admin/ReviewAdmin";
import DetailReview from "../pages/Admin/DetailReview";
import EditReview from "../pages/Admin/EditReview";
import TambahReview from "../pages/Admin/TambahReview";
import UserAdmin from "../pages/Admin/UserAdmin";
import UserDetail from "../pages/Admin/UserDetail";
import EditUser from "../pages/Admin/EditUser";
import UserTambah from "../pages/Admin/UserTambah.jsx";

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
        path: "/review-gambar/:id",
        element: <ReviewGambar />,
      },
      {
        path: "/profile",
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
    path: "/review-admin",
    element: <ReviewAdmin />,
  },
  {
    path: "/detail-review",
    element: <DetailReview />,
  },
  {
    path: "/edit-review",
    element: <EditReview />,
  },
  {
    path: "/tambah-review",
    element: <TambahReview />,
  },
  {
    path: "/users",
    element: <UserAdmin />,
  },
  {
    path: "/user-detail",
    element: <UserDetail />,
  },
  {
    path: "/edit-user",
    element: <EditUser />,
  },
  {
    path: "/user-tambah",
    element: <UserTambah />,
  },
]);

export default router;