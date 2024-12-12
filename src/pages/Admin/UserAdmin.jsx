import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdLogout, MdOutlinePlace } from "react-icons/md";
import {
  FaHome,
  FaUser,
  FaEye,
  FaEdit,
  FaTrash,
  FaSearch,
} from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import Logo from "../../assets/logo.svg";
import { Sidebar } from "../../components/organisms";

const UserAdmin = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State untuk pencarian

  // Fetch data pengguna dari API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(localStorage.getItem('token'));
        if (!token) throw new Error("Token tidak ditemukan");
  
        const response = await axios.get("http://localhost:3000/api/v1/auth/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(response.data); 
      } catch (error) {
        console.error("Gagal mengambil data pengguna:", error.response?.data?.message || error.message);
      }
    };
  
    fetchUsers();
  }, []);
  
  // Fungsi untuk navigasi ke halaman detail user
  const handleViewUser = (user) => {
    navigate(`/user-detail`, { state: { user } });
  };

  // Fungsi untuk menghapus user
  const handleDeleteUser = async (userId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:3000/api/auth/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Hapus user dari state lokal setelah berhasil dihapus di backend
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      console.error("Gagal menghapus pengguna:", error.response?.data?.message || error.message);
      // Optional: Tambahkan logika untuk menangani error (misalnya, tampilkan pesan ke pengguna)
    }
  };

  // Fungsi untuk menambah user baru
  const handleAddUser = () => {
    navigate(`/user-tambah`); // Navigasi ke halaman tambah user
  };

  // Fungsi untuk mengedit user
  const handleEditUser = (user) => {
    navigate(`/edit-user`, { state: { user } }); // Navigasi ke halaman edit user
  };

  // Filter users berdasarkan pencarian
  const filteredUsers = users.filter(
    (user) =>
      (user.name && user.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (user.email && user.email.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="bg-[#E8E8E8] min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white w-full h-[60px] px-4 flex items-center justify-between">
        <img src={Logo} alt="Logo" className="h-10" />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Panel */}
        <div className="bg-white flex-1 p-4 m-4 rounded-lg overflow-auto">
          {/* Header Controls */}
          <div className="flex justify-between items-center mb-4">
            <button
              className="bg-[#C66E4E] text-white px-4 py-2 rounded"
              onClick={handleAddUser}
            >
              + Tambah User
            </button>

            {/* Search Bar */}
            <div className="relative w-1/3">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" />
              <input
                type="text"
                placeholder="Cari Users"
                className="w-full pl-10 pr-3 py-2 border rounded"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Users Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b bg-gray-100">
                  <th className="p-2 text-left">No</th>
                  <th className="p-2 text-left">Nama</th>
                  <th className="p-2 text-left">Email</th>
                  <th className="p-2 text-left">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, index) => (
                  <tr key={user._id} className="border-b hover:bg-gray-50">
                    <td className="p-2">{index + 1}</td>
                    <td
                      className="p-2 text-blue-500 cursor-pointer"
                      onClick={() => handleViewUser(user)}
                    >
                      {user.username}
                    </td>
                    <td className="p-2">{user.email}</td>
                    <td className="p-2">
                      <div className="flex space-x-2">
                        <button
                          className="p-1 text-black hover:bg-gray-100 rounded"
                          onClick={() => handleViewUser(user)}
                          title="Lihat Detail"
                        >
                          <FaEye />
                        </button>
                        <button
                          className="p-1 text-black hover:bg-gray-100 rounded"
                          onClick={() => handleEditUser(user)}
                          title="Edit User"
                        >
                          <FaEdit />
                        </button>
                        <button
                          className="p-1 text-black hover:bg-gray-100 rounded"
                          onClick={() => handleDeleteUser(user._id)}
                          title="Hapus User"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAdmin;