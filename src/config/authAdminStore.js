import { create } from "zustand";
import { axiosInstance } from "./axiosInstance.js";
import {
  decodeToken,
  getAccessToken,
  removeAccessToken,
  saveAccessToken,
} from "../utils/tokenManager.js";

const useAuthAdminStrore = create((set) => ({
  currentAdmin: null,
  getCurrentAdmin: () => {
    const accesToken = getAccessToken();
    if (accesToken) {
      set({ currentAdmin: decodeToken(accesToken) });
    }
  },
  login: async (email, password) => {
    try {
      const { data } = await axiosInstance.post("/auth/login-admin", {
        email,
        password,
      });
      saveAccessToken(data.accessToken);
      set({ currentAdmin: decodeToken(data.accessToken) });
      return data;
    } catch (error) {
      console.error("Login failed:", error);
      // Tampilkan pesan kesalahan kepada pengguna
      alert("Login failed: Please check your credentials and try again");
    }
  },

  register: async (username, email, password) => {
    try {
      const { data } = await axiosInstance.post("/auth/register-admin", {
        username,
        email,
        password,
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  logout: async () => {
    removeAccessToken();
    set({ currentAdmin: null });
  },
}));

export default useAuthAdminStrore;
