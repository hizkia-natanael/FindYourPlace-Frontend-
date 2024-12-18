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

const UserAdmin = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Token tidak ditemukan");

        const response = await axios.get(
          "https://findyourplace-backend-production.up.railway.app/api/v1/auth/users",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUsers(response.data);
      } catch (error) {
        console.error(
          "Gagal mengambil data pengguna:",
          error.response?.data?.message || error.message
        );
      }
    };

    fetchUsers();
  }, []);

  const handleViewUser = (user) => {
    navigate(`/user-detail`, { state: { user } });
  };

  const handleDeleteUser = async (userId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Token tidak ditemukan");
        return;
      }

      const response = await axios.delete(
        `https://findyourplace-backend-production.up.railway.app/api/v1/auth/users/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setUsers(users.filter((user) => user._id !== userId));
      }
    } catch (error) {
      console.error(
        "Gagal menghapus pengguna:",
        error.response?.data?.message || error.message
      );
    }
  };

  const handleAddUser = () => {
    navigate(`/user-tambah`);
  };

  const handleEditUser = (user) => {
    navigate(`/edit-user`, { state: { user } });
  };

  const filteredUsers = users.filter(
    (user) =>
      (user.name &&
        user.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (user.email &&
        user.email.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="bg-[#E8E8E8] min-h-screen flex flex-col">
      <div className="bg-white w-full h-[60px] px-4 flex items-center justify-between">
        <img src={Logo} alt="Logo" className="h-10" />
      </div>

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <div className="bg-white flex-1 p-4 m-4 rounded-lg overflow-auto">
          <div className="flex justify-between items-center mb-4">
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
