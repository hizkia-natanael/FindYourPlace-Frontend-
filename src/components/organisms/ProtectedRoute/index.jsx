import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getAccessToken, decodeToken } from "../../../utils/tokenManager.js"; // Sesuaikan path sesuai struktur Anda

const ProtectedRoute = () => {
  const token = getAccessToken();

  if (!token) {
    // Jika tidak ada token, redirect ke halaman login
    return <Navigate to="/login-admin" />;
  }

  try {
    // Memeriksa apakah token valid dengan mendekode dan memeriksa apakah masih berlaku
    const decodedToken = decodeToken(token);
    const expirationTime = decodedToken.exp * 1000; // mengubah waktu kedaluwarsa ke milidetik
    const currentTime = Date.now();

    if (currentTime > expirationTime) {
      // Jika token sudah kedaluwarsa, logout dan redirect ke login
      localStorage.removeItem("accessToken");
      return <Navigate to="/login-admin" />;
    }
  } catch (error) {
    console.error("Invalid token", error);
    localStorage.removeItem("accessToken");
    return <Navigate to="/login-admin" />;
  }

  // Jika token valid, lanjutkan ke halaman tujuan (dashboard admin)
  return <Outlet />;
};

export default ProtectedRoute;
