import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/atoms";
import usePlaceStore from "../../config/placeStore.js";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReviewGambar = () => {
  const { getPlaceById } = usePlaceStore();
  const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  // Custom toast configuration
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const places = await getPlaceById(id);
        setData(places);
      } catch (error) {
        toast.error("Gagal memuat data tempat", toastConfig);
      }
    };
    fetchData();
  }, [getPlaceById, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Pastikan user sudah login
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
  
      if (!token || !userId) {
        toast.warn("Silakan login terlebih dahulu", {
          ...toastConfig,
          style: {
            backgroundColor: "#fef3c7", // Amber/yellow background
            color: "#854d0e", // Dark amber text
          }
        });
        return;
      }
  
      // Kirim review dengan axios
      const response = await axios.post('https://findyourplace-backend-production.up.railway.app/api/v1/reviews', 
        {
          placeId: id, 
          userId: userId, 
          rating: parseInt(rating), 
          comment: comment
        }, 
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
  
      // Toast success dengan warna hijau earth tone
      toast.success("Ulasan berhasil ditambahkan", {
        ...toastConfig,
        style: {
          backgroundColor: "#e6f3e6", // Soft green background
          color: "#165c16", // Dark green text
        }
      });

      // Redirect setelah beberapa saat
      setTimeout(() => {
        navigate("/daftar-tempat");
      }, 2000);
    } catch (error) {
      // Toast error dengan warna merah earth tone
      const errorMessage = error.response?.data?.message || 'Gagal menambahkan ulasan';
      toast.error(errorMessage, {
        ...toastConfig,
        style: {
          backgroundColor: "#f8e7e7", // Soft red background
          color: "#7f1d1d", // Dark red text
        }
      });
    }
  };

  const handleLihatUlasan = () => {
    navigate(`/review-tempat/${id}`);
  };
    
  return (
    <div className="px-6 mt-14 sm:px-10 lg:px-16 py-12 bg-gray-100">
      {/* Toast Container */}
      <ToastContainer />

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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-4">
              <label htmlFor="rating" className="block text-black font-medium mb-2">
                Beri Rating
              </label>
              <select
                id="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a04925]"
                required
              >
                <option value="">Pilih Rating</option>
                <option value="1">Buruk Sekali</option>
                <option value="2">Buruk</option>
                <option value="3">Biasa</option>
                <option value="4">Bagus</option>
                <option value="5">Bagus Sekali</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="comment" className="block text-black font-medium mb-2">
                Komentar
              </label>
              <textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Tulis ulasan Anda..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a04925]"
                rows="4"
                required
              />
            </div>
            <div className="flex space-x-4">
              <Button 
                type="submit"
                className="bg-[#a04925] text-white px-4 py-2 rounded-md hover:bg-[#82391d] transition"
              >
                Kirim Ulasan
              </Button>
              <Button 
                type="button"
                onClick={handleLihatUlasan}
                className="bg-[#a04925] text-white px-4 py-2 rounded-md hover:bg-[#82391d] transition"
              >
                Lihat Ulasan
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewGambar;