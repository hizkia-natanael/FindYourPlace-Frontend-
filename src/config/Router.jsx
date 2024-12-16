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
import PlacesAdmin from "../pages/Admin/PlaceAdmin.jsx";
import AllPlace from "../pages/Admin/AllPlace.jsx";
import ReviewTempat from "../pages/Daftar Tempat/ReviewTempat.jsx";
import RegisterAdmin from "../pages/Admin/Register.jsx";
import LoginAdmin from "../pages/Admin/Login.jsx";
import { ProtectedRoute } from "../components/organisms";

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
        path: "/review-tempat/:id",
        element: <ReviewTempat />,
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
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <DashboardAdmin />,
      },
      {
        path: "review-admin",
        element: <ReviewAdmin />,
      },
      {
        path: "detail-review",
        element: <DetailReview />,
      },
      {
        path: "edit-review",
        element: <EditReview />,
      },
      {
        path: "tambah-review",
        element: <TambahReview />,
      },
      {
        path: "admin-place",
        element: <AllPlace />,
      },
      {
        path: "add-place",
        element: <PlacesAdmin />,
      },
      {
        path: "edit-place/:id",
        element: <PlacesAdmin />,
      },
      {
        path: "user-admin",
        element: <UserAdmin />,
      },
      {
        path: "user-detail",
        element: <UserDetail />,
      },
      {
        path: "edit-user",
        element: <EditUser />,
      },
      {
        path: "user-tambah",
        element: <UserTambah />,
      },
    ],
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
    path: "/register-admin",
    element: <RegisterAdmin />,
  },
  {
    path: "/login-admin",
    element: <LoginAdmin />,
  },
]);

export default router;
