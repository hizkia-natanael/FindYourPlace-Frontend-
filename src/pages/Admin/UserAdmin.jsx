import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdLogout, MdOutlinePlace } from "react-icons/md";
import { FaHome, FaUser, FaEye, FaEdit, FaTrash, FaSearch } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import Logo from "../../assets/logo.svg";

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
  
        const response = await axios.get("http://localhost:3000/api/auth/users", {
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
    <div className="bg-[#E8E8E8] min-h-screen">
      {/* Header */}
      <div className="bg-white w-full h-[100px] px-8 flex items-center">
        <img src={Logo} alt="Logo" />
      </div>

      {/* Main Content */}
      <div className="flex h-[89vh] items-start w-full relative top-[1vh]">
        {/* Sidebar */}
        <div className="bg-white w-[252px] p-10 rounded-br-lg h-full flex flex-col items-center">
          <img
            src="https://i.pinimg.com/564x/86/b0/5b/86b05b5f1bdca7da73f0d89651ccb186.jpg"
            alt="Profile"
            className="rounded-full w-[120px] h-[120px] my-3"
          />
          <div className="w-full mt-2">
            <p className="text-black text-center">
              Welcome, <span className="font-bold">Natan</span>!
            </p>
            <p className="text-black font-bold text-center">Admin</p>
          </div>
          <button
            className="p-4 w-full h-[40px] text-black flex items-center justify-start mb-2"
            onClick={() => navigate("/admin")}
          >
            <FaHome className="mr-2" /> Dashboard
          </button>
          <button
            className="p-4 w-full h-[40px] text-black bg-[#C66E4E] flex items-center justify-start mb-2"
            onClick={() => navigate("/")}
          >
            <FaUser className="mr-2" /> Users
          </button>
          <button className="p-4 w-full h-[40px] text-black bg-white flex items-center justify-start mb-2">
            <MdOutlinePlace className="mr-2" /> Places
          </button>
          <button className="p-4 w-full h-[40px] text-black bg-white flex items-center justify-start mb-2">
            <IoIosChatbubbles className="mr-2" /> Reviews
          </button>

          <button
            className="w-[130px] h-[40px] bg-[#C66E4E] mt-5"
            onClick={() => navigate("/")}
          >
            <MdLogout className="inline-block mr-2" /> Sign out
          </button>
        </div>

        {/* Main Panel */}
        <div className="bg-white flex-1 h-full rounded-lg p-16 ml-8 flex flex-col space-y-4 items-start">
          {/* Header Controls */}
          <div className="flex justify-between w-full mb-4">
            <button
              className="bg-[#C66E4E] text-white px-4 py-2"
              onClick={handleAddUser}
            >
              + Tambah User
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative w-full mb-4">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" />
            <input
              type="text"
              placeholder="Cari Users"
              className="w-full pl-10 pr-3 py-2 border rounded"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Users Table */}
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
                <tr key={user._id} className="border-b">
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
                      >
                        <FaEye />
                      </button>
                      <button
                        className="p-1 text-black hover:bg-gray-100 rounded"
                        onClick={() => handleEditUser(user)}
                      >
                        <FaEdit />
                      </button>

                      <button
                        className="p-1 text-black hover:bg-gray-100 rounded"
                        onClick={() => handleDeleteUser(user._id)}
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
  );
};

export default UserAdmin;