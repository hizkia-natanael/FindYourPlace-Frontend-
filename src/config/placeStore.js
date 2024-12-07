import { create } from "zustand";
import { axiosInstance } from "./axiosInstance.js";

const usePlaceStore = create((set) => ({
  places: [],
  getPlaces: async () => {
    try {
      const { data } = await axiosInstance.get("/place/");
      set({ places: data });
    } catch (error) {
      console.error(error);
    }
  },
  getPlaceById: async (id) => {
    try {
      const { data } = await axiosInstance.get(`/place/${id}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  },
}));

export default usePlaceStore;
