import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaEye,
  FaEdit,
  FaTrash,
  FaSearch,
} from "react-icons/fa";
import Logo from "../../assets/logo.svg";
import { Sidebar } from "../../components/organisms";
import { toast } from 'react-toastify';

const API_URL = "https://findyourplace-backend-production.up.railway.app/api/v1";

const UserAdmin = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users data
  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const token = localStorage.getItem("token");
      
      if (!token) {
        toast.error("Sesi telah berakhir. Silakan login kembali.");
        navigate('/login');
        return;
      }

      const response = await axios.get(
        `${API_URL}/auth/users`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Check if response data is array or has data property
      const userData = Array.isArray(response.data) ? response.data : 
                      response.data.data ? response.data.data : [];
      
      setUsers(userData);
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Terjadi kesalahan saat mengambil data pengguna";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle view user details
  const handleViewUser = (user) => {
    navigate(`/admin/user-detail`, { 
      state: { user },
      replace: false 
    });
  };

  // Handle delete user
  const handleDeleteUser = async (userId, username) => {
    if (!window.confirm(`Apakah Anda yakin ingin menghapus pengguna ${username}?`)) {
      return;
    }

    try {
      const token = localStorage.getItem("token");
      
      if (!token) {
        toast.error("Sesi telah berakhir. Silakan login kembali.");
        navigate('/login');
        return;
      }

      await axios.delete(
        `${API_URL}/auth/users/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUsers(users.filter((user) => user._id !== userId));
      toast.success("Pengguna berhasil dihapus");
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Gagal menghapus pengguna";
      toast.error(errorMessage);
    }
  };

  // Filter users based on search query
  const filteredUsers = users.filter(
    (user) =>
      (user.username?.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (user.email?.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-[#E8E8E8] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-[#E8E8E8] min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white w-full h-[60px] px-4 flex items-center justify-between shadow-md fixed top-0 z-10">
        <img src={Logo} alt="Logo" className="h-10" />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 mt-[60px]">
        {/* Sidebar */}
        <div className="fixed left-0 h-full">
          <Sidebar />
        </div>

        {/* Content Area */}
        <div className="flex-1 ml-[250px] p-6">
          {/* Search and Controls */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <div className="flex justify-between items-center">
              <div className="relative w-1/3">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari berdasarkan nama atau email..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full whitespace-nowrap">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-black">No</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-black">Nama</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-black">Email</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-black">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredUsers.length > 0 ? (
                    filteredUsers.map((user, index) => (
                      <tr 
                        key={user._id} 
                        className="hover:bg-gray-50 transition-colors duration-150"
                      >
                        <td className="px-6 py-4 text-sm text-black">{index + 1}</td>
                        <td 
                          className="px-6 py-4 text-sm text-black hover:text-blue-600 cursor-pointer"
                          onClick={() => handleViewUser(user)}
                        >
                          {user.username || 'Tidak ada nama'}
                        </td>
                        <td className="px-6 py-4 text-sm text-black">
                          {user.email || 'Tidak ada email'}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-3">
                            <button
                              className="p-1.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors duration-150"
                              onClick={() => handleViewUser(user)}
                              title="Lihat Detail"
                            >
                              <FaEye className="w-4 h-4" />
                            </button>
                            <button
                              className="p-1.5 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors duration-150"
                              onClick={() => handleDeleteUser(user._id, user.username)}
                              title="Hapus User"
                            >
                              <FaTrash className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                        {searchQuery ? 'Tidak ada hasil yang ditemukan' : 'Belum ada data pengguna'}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAdmin;