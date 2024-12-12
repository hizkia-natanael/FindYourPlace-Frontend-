import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button } from "../../components/atoms";
import usePlaceStore from "../../config/placeStore.js";

const ReviewGambar = () => {
  const { getPlaceById } = usePlaceStore();
  const [data, setData] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  // Toast configuration
  const toastConfig = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
    style: {
      backgroundColor: "#f0f0f0",
      color: "#333",
    },
  };

  // Fetch place and reviews data
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const placeData = await getPlaceById(id);
        setData(placeData);

        const { data: reviewResponse } = await axios.get(
          `http://localhost:3000/api/v1/reviews/${id}`
        );

        setReviews(Array.isArray(reviewResponse.data) ? reviewResponse.data : []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Gagal memuat data tempat atau ulasan");
        toast.error("Gagal memuat data tempat atau ulasan", toastConfig);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [getPlaceById, id]);

  // Render star rating
  const renderStarRating = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={i < rating ? "text-yellow-500" : "text-gray-300"}
      >
        ★
      </span>
    ));
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-[#a04925]"></div>
      </div>
    );
  }

  // Error state
  if (error || !data) {
    return (
      <div className="px-6 mt-14 sm:px-10 lg:px-16 py-12 bg-gray-100 text-center">
        <ToastContainer />
        <h1 className="text-2xl text-red-600 mb-4">
          {error || "Tidak dapat memuat data"}
        </h1>
        <Button
          onClick={() => navigate("/daftar-tempat")}
          className="bg-[#a04925] text-white px-4 py-2 rounded-md hover:bg-[#82391d] transition"
        >
          Kembali ke Daftar Tempat
        </Button>
      </div>
    );
  }

  return (
    <div className="px-6 mt-14 sm:px-10 lg:px-16 py-12 bg-gray-100">
      <ToastContainer />

      <Button
        onClick={() => navigate("/daftar-tempat")}
        className="bg-[#a04925] text-white px-4 py-2 rounded-md hover:bg-[#82391d] transition"
      >
        ← Kembali
      </Button>

      <div className="mt-8 space-y-6">
        <h1 className="text-3xl font-bold text-[#a04925]">{data.name}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Place Image */}
          <div className="lg:col-span-1">
            <img
              src={`http://localhost:3000/uploads/${data.image}`}
              alt={data.name}
              className="w-full h-72 object-cover rounded-md shadow-md"
              onError={(e) => {
                e.target.src = "/path/to/default/image.jpg";
              }}
            />
          </div>

          {/* Place Information */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#a04925]">Alamat</h3>
              <p className="text-gray-700">{data.address || "Alamat tidak tersedia"}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#a04925]">Maps</h3>
              {data.googleMapsLink ? (
                <a
                  href={data.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  Lihat di Google Maps
                </a>
              ) : (
                <p className="text-gray-500">Tautan Maps tidak tersedia</p>
              )}
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl font-semibold text-[#a04925] mb-4">
            Ulasan ({reviews.length})
          </h2>

          {reviews.length === 0 ? (
            <div className="text-center text-gray-500 py-4">
              <p>Belum ada ulasan untuk tempat ini.</p>
              <p className="mt-2 text-sm">Jadilah yang pertama memberi ulasan!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {reviews.map((review) => (
                <div
                  key={review._id}
                  className="border-b pb-4 last:border-b-0"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-[#a04925]">
                        {review.userId?.email || "Pengguna Anonim"}
                      </h3>
                      <span className="text-yellow-500 text-lg">
                        {renderStarRating(review.rating || 0)}
                      </span>
                    </div>
                    <span className="text-gray-500 text-sm">
                      {review.createdAt
                        ? new Date(review.createdAt).toLocaleDateString("id-ID")
                        : "Tanggal tidak tersedia"}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-700">
                    {review.comment || "Tidak ada komentar"}
                  </p>
                </div>
              ))}
            </div>
          )}

          <Button
            onClick={() => navigate(`/daftar-tempat`)}
            className="mt-4 bg-[#a04925] text-white px-4 py-2 rounded-md hover:bg-[#82391d] transition"
          >
            Kembali
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReviewGambar;