import React, { useState, useEffect } from "react";
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
import { AdminHeader } from "../../components/organisms/Header/HeaderAdmin";

const UserAdmin = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("latest");
  const [showCount, setShowCount] = useState(10);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  // Filter users based on searchTerm
  const filteredUsers = users
    .filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, showCount);

  const handleSort = (order) => {
    setSortOrder(order);
    if (order === "latest") {
      users.sort((a, b) => b.id - a.id);
    } else {
      users.sort((a, b) => a.id - b.id);
    }
  };

  const handleShow = (count) => setShowCount(parseInt(count));

  const handleView = (id) => {
    console.log(`Viewing user with ID: ${id}`);
    // Navigasi ke detail user
  };

  const handleEdit = (id) => {
    console.log(`Editing user with ID: ${id}`);
    // Navigasi ke halaman edit user
  };

  const handleDelete = (id) => {
    console.log(`Deleting user with ID: ${id}`);
    // Tambahkan konfirmasi penghapusan jika perlu
  };

  return (
    <div className="bg-[#E8E8E8] min-h-screen">
      {/* Header */}
      <AdminHeader />

      {/* Main Content */}
      <div className="flex min-h-[100vh] items-start w-full">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Panel */}
        <div className="bg-white flex-1 min-h-[100vh] rounded-lg p-16 ml-8 flex flex-col space-y-4 items-start">
          {/* Header Controls */}
          <div className="flex justify-between w-full mb-4 rounded-lg">
            <button
              className="bg-[#C66E4E] text-white px-4 py-2 rounded-lg"
              onClick={() => navigate("/admin/tambah-review")}
            >
              + Tambah Review
            </button>
            <div className="flex space-x-2 rounded-lg">
              <select
                className="w-[150px] border rounded-lg px-2 py-1"
                onChange={(e) => handleSort(e.target.value)}
              >
                <option value="latest">Sort By: Terbaru</option>
                <option value="oldest">Sort By: Terlama</option>
              </select>
              <select
                className="w-[110px] border rounded-lg px-2 py-1"
                onChange={(e) => handleShow(e.target.value)}
              >
                <option value="10">Show: 10</option>
                <option value="20">Show: 20</option>
                <option value="30">Show: 30</option>
              </select>
            </div>
          </div>
          {/* Search Bar */}
          <div className="w-full flex justify-center mb-4">
            <div className="relative w-1/2">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" />
              <input
                type="text"
                placeholder="Cari Review"
                className="w-full pl-10 pr-3 py-2 border rounded"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          {/* Users Table */}
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">No</th>
                <th className="text-left p-2">Nama</th>
                <th className="text-left p-2">Review</th>
                <th className="text-left p-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={user.id} className="border-b">
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">{user.review}</td>
                  <td className="p-2">
                    <div className="flex space-x-2">
                      <button
                        className="p-1 hover:bg-gray-100 rounded"
                        onClick={() => handleView(user.id)}
                      >
                        <FaEye />
                      </button>
                      <button
                        className="p-1 hover:bg-gray-100 rounded"
                        onClick={() => handleEdit(user.id)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="p-1 hover:bg-gray-100 rounded"
                        onClick={() => handleDelete(user.id)}
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
