import React, { useState } from "react";
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

  // State untuk users
  const [users, setUsers] = useState([
    { id: 1, name: "Sarah Amelia", email: "sarah@gmail.com" },
    { id: 2, name: "Budi Nugraha", email: "budi@gmail.com" },
    { id: 3, name: "Dimas Pratama", email: "dimas@gmail.com" },
    { id: 4, name: "Laura Putri", email: "laura@gmail.com" },
    { id: 5, name: "Rizky Akbar", email: "rizky@gmail.com" },
    { id: 6, name: "Anita Kartika", email: "anita@gmail.com" },
    { id: 7, name: "Citra Maharani", email: "citra@gmail.com" },
    { id: 8, name: "Andre Bintang", email: "andre@gmail.com" },
  ]);

  const [searchQuery, setSearchQuery] = useState(""); // State untuk pencarian
  const [newUserId, setNewUserId] = useState(users.length + 1); // ID unik untuk user baru

  // Fungsi untuk navigasi ke halaman detail user
  const handleViewUser = (user) => {
    navigate(`/user-detail`, { state: { user } });
  };

  // Fungsi untuk menghapus user
  const handleDeleteUser = (userId) => {
    // Hapus user berdasarkan ID
    setUsers(users.filter((user) => user.id !== userId));
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
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
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
        <Sidebar />

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
                <tr key={user.id} className="border-b">
                  <td className="p-2">{index + 1}</td>
                  <td
                    className="p-2 text-blue-500 cursor-pointer"
                    onClick={() => handleViewUser(user)}
                  >
                    {user.name}
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
                        onClick={() => handleDeleteUser(user.id)}
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
