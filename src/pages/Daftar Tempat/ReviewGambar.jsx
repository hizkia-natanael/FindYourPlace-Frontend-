import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/atoms";
import usePlaceStore from "../../config/placeStore.js";
const ReviewGambar = () => {
  const { getPlaceById } = usePlaceStore();
  const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const [reviewInput, setReviewInput] = useState("");
  const [ratingInput, setRatingInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const places = await getPlaceById(id);
      setData(places);
    };
    fetchData();
  }, [getPlaceById, id]);

  const addReview = () => {
    if (reviewInput.trim() && ratingInput) {
      setReviews([
        ...reviews,
        {
          name: "Anonymous",
          rating: ratingInput,
          text: reviewInput,
          date: new Date().toLocaleDateString("id-ID"),
        },
      ]);
      setReviewInput("");
      setRatingInput("");
    } else {
      alert("Harap isi ulasan dan pilih rating.");
    }
  };

  return (
    <div className="px-6 mt-14 sm:px-10 lg:px-16 py-12 bg-gray-100">
      {/* Tombol kembali */}
      <Button
        onClick={() => navigate("/daftar-tempat")}
        className="bg-[#a04925] text-white px-4 py-2 rounded-md hover:bg-[#82391d] transition"
      >
        ← Kembali
      </Button>

      {/* Informasi tempat */}
      <div className="mt-8 space-y-6">
        <h1 className="text-3xl font-bold text-[#a04925]">{data.name}</h1>

        {/* Galeri gambar dan informasi */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Gambar */}
          <div className="lg:col-span-1">
            <img
              src={`http://localhost:3000/uploads/${data.image}`}
              alt={data.name}
              className="w-full h-72 object-cover rounded-md shadow-md"
            />
          </div>

          {/* Informasi deskripsi */}
          <div className="lg:col-span-2 space-y-4">
            {/* Alamat */}
            <div>
              <h3 className="text-lg font-semibold text-[#a04925]">Alamat</h3>
              <p className="text-gray-700">{data.address}</p>
            </div>

            {/* Maps */}
            <div>
              <h3 className="text-lg font-semibold text-[#a04925]">Maps</h3>
              <a
                href={data.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-700"
              >
                Google Maps: {data.googleMapsLink}
              </a>
            </div>
          </div>
        </div>

        {/* Informasi lengkap */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl font-semibold text-[#a04925] mb-4">
            Informasi Lengkap
          </h2>
          <p className="text-gray-700 text-justify">{data.description}</p>
        </div>

        {/* Formulir ulasan */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl font-semibold text-[#a04925] mb-4">Ulasan</h2>
          <form className="space-y-4">
            <textarea
              rows="4"
              placeholder="Tulis ulasan Anda..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a04925]"
            ></textarea>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Beri Rating:</h3>
              <div className="flex items-center space-x-4 text-black">
                <label className="flex items-center space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    type="radio"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                  </svg>
                </label>
              </div>
            </div>
            <Button className="bg-[#a04925] text-white px-4 py-2 rounded-md hover:bg-[#82391d] transition">
              Kirim Ulasan
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewGambar;
