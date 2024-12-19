import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdLogout, MdOutlinePlace } from "react-icons/md";
import { FaHome, FaUser } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import Logo from "../../assets/logo.svg";
import { Sidebar } from "../../components/organisms";
import axios from "axios";

const UserDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [reviews, setReviews] = useState([]); // State untuk menyimpan data review
  const [loading, setLoading] = useState(true); // State untuk loading

  // Data user yang diterima dari navigasi
  const user = location.state?.user || {
    id: "N/A",
    name: "Unknown User",
    email: "unknown@example.com",
    profilePic: "https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg", 
  };

  const handleUpdateUser = location.state?.handleUpdateUser;

  const handleEditUser = () => {
    navigate("/edit-user", { state: { user, handleUpdateUser } });
  };

  // Fungsi untuk mengambil review berdasarkan userId
  const fetchUserReviews = async () => {
    try {
      const response = await axios.get(`YOUR_API_URL/reviews?userId=${user.id}`); // Ganti dengan URL API yang sesuai
      setReviews(response.data); // Simpan data review ke state
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserReviews(); // Ambil data review saat komponen dimuat
  }, [user.id]);

  return (
    <div className="bg-[#E8E8E8] min-h-screen">
      {/* Header */}
      <div className="bg-white w-full h-[100px] px-8 flex items-center">
        <img src={Logo} alt="Logo" />
      </div>

      {/* Main Content */}
      <div className="flex h-[80vh] items-start w-full relative top-[1vh]">
        {/* Sidebar */}
        <Sidebar />

        {/* User Detail Panel */}
        <div className="bg-white flex-1 h-full rounded-lg p-7 ml-8">
          <h2 className="text-3xl font-bold mb-4">Detail User</h2>
          <div className="flex flex-col items-center space-y-4">
            {/* Profil User */}
            <div className="flex flex-col items-center justify-center space-y-3">
              <img
                src={user.profilePic}
                alt="User Profile"
                className="rounded-full w-[120px] h-[120px]"
              />
              <p className="text-black font-bold">{user.name}</p>
            </div>

            {/* Detail User */}
            <div className="w-[80%]">
              <div className="flex flex-col space-y-2 mt-4">
                <label className="font-bold">Nama User:</label>
                <input
                  type="text"
                  value={user.name}
                  readOnly
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div className="flex flex-col space-y-2 mt-4">
                <label className="font-bold">Email:</label>
                <input
                  type="email"
                  value={user.email}
                  readOnly
                  className="w-full border rounded px-3 py-2"
                />
              </div>
            </div>

            {/* Tabel Review */}
            <div className="w-full mt-6">
              <h3 className="text-2xl font-bold mb-4">Reviews</h3>
              {loading ? (
                <p>Loading reviews...</p>
              ) : (
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 px-4 py-2">Rating</th>
                      <th className="border border-gray-300 px-4 py-2">Comment</th>
                      <th className="border border-gray-300 px-4 py-2">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reviews.length > 0 ? (
                      reviews.map((review) => (
                        <tr key={review.id}>
                          <td className="border border-gray-300 px-4 py-2">{review.rating}</td>
                          <td className="border border-gray-300 px-4 py-2">{review.comment}</td>
                          <td className="border border-gray-300 px-4 py-2">{new Date(review.createdAt).toLocaleDateString()}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="3" className="border border-gray-300 px-4 py-2 text-center">No reviews found</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              )}
            </div>

            {/* Tombol Aksi */}
            <div className="flex justify-center w-full mt-6">
              <button
                onClick={() => navigate("/admin/user-admin")}
                className="bg-gray-300 text-black px-4 py-2 rounded"
              >
                ← Kembali
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
