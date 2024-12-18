import { create } from "zustand";
import { axiosInstance } from "./axiosInstance.js";

const usePlaceStore = create((set) => ({
  places: [],
  getPlaces: async () => {
    try {
      const { data } = await axiosInstance.get("/place");
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
  addPlace: async (place) => {
    try {
      const formData = new FormData();
      formData.append("name", place.name);
      formData.append("description", place.description);
      formData.append("address", place.address);
      formData.append("googleMapsLink", place.googleMapsLink);
      formData.append("image", place.image);

      const { data } = await axiosInstance.post("/place", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      set((state) => ({
        places: [...state.places, data],
      }));
    } catch (error) {
      console.error(error);
    }
  },
  updatePlace: async (id, updatedPlace) => {
    try {
      const formData = new FormData();
      formData.append("name", updatedPlace.name);
      formData.append("description", updatedPlace.description);
      formData.append("googleMapsLink", updatedPlace.googleMapsLink);
      formData.append("address", updatedPlace.address);
      formData.append("image", updatedPlace.image);

      const { data } = await axiosInstance.put(`/place/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      set((state) => ({
        places: state.places.map((place) => (place._id === id ? data : place)),
      }));
    } catch (error) {
      console.error(error);
    }
  },
  deletePlace: async (id) => {
    try {
      await axiosInstance.delete(`/place/${id}`);
      set((state) => ({
        places: state.places.filter((place) => place._id !== id),
      }));
    } catch (error) {
      console.error(error);
    }
  },

  searchPlaces: async (query) => {
    try {
      const { data } = await axiosInstance.get(`http://localhost:3000/api/v1/search?query=${query}`); // Perbarui URL di sini
      return data;
    } catch (error) {
      console.error("Error searching places:", error.message);
      throw error;
    }
  },
  
}));

export default usePlaceStore;