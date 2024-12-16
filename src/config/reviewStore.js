import { axiosInstance } from "./axiosInstance";

export const addReview = async (placeId, rating, comment) => {
  try {
    const response = await axiosInstance.post(`/reviews`, {
      placeId,
      rating,
      comment,
    });
    return response;
  } catch (error) {
    console.error('Error adding review:', error.response?.data?.message || error.message);
    throw new Error(error.response?.data?.message || 'Gagal menambahkan ulasan');
  }
};

// Fungsi untuk mengambil data review
export const getReviews = async () => {
  try {
    const response = await axiosInstance.get("/reviews");
    return response.data;  // Menyimpan data review di sini
  } catch (error) {
    console.error('Error fetching reviews:', error.response?.data?.message || error.message);
    throw new Error(error.response?.data?.message || 'Gagal mengambil data ulasan');
  }
};

// Fungsi untuk menghapus review berdasarkan ID
export const deleteReview = async (reviewId) => {
  try {
    const response = await axiosInstance.delete(`/reviews/${reviewId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting review:', error.response?.data?.message || error.message);
    throw new Error(error.response?.data?.message || 'Gagal menghapus ulasan');
  }
};