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
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("latest");
  const [showCount, setShowCount] = useState(10);

  // Dummy data for the Users table
  const users = [
    {
      id: 1,
      name: "Sarah Amelia",
      review: "Tempatnya sangat nyaman dan estetik.",
    },
    { id: 2, name: "Budi Nugraha", review: "Pelayanan ramah dan kopi enak!" },
    { id: 3, name: "Dimas Pratama", review: "Suasananya cocok untuk bekerja." },
    {
      id: 4,
      name: "Laura Putri",
      review: "Harganya terjangkau, tempat bersih.",
    },
    {
      id: 5,
      name: "Rizky Akbar",
      review: "Sangat recommended untuk nongkrong.",
    },
    { id: 6, name: "Anita Kartika", review: "Menu makanannya cukup variatif." },
    { id: 7, name: "Citra Maharani", review: "Musiknya asyik, bikin betah." },
    { id: 8, name: "Andre Bintang", review: "Cocok untuk kumpul keluarga." },
  ];

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
          <div className="flex justify-between w-full mb-4 rounded-lg">
            <button
              className="bg-[#C66E4E] text-white px-4 py-2 rounded-lg"
              onClick={() => navigate("/tambah-review")}
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
          <div className="relative w-full mb-4">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" />
            <input
              type="text"
              placeholder="Cari Review"
              className="w-full pl-10 pr-3 py-2 border rounded"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {/* Users Table */}
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2 text-black">No</th>
                <th className="text-left p-2 text-black">Nama</th>
                <th className="text-left p-2 text-black">Review</th>
                <th className="text-left p-2 text-black">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={user.id} className="border-b">
                  <td className="p-2 text-black">{index + 1}</td>
                  <td className="p-2 text-black">{user.name}</td>
                  <td className="p-2 text-black">{user.review}</td>
                  <td className="p-2">
                    <div className="flex space-x-2">
                      <button
                        className="p-1 text-black hover:bg-gray-100 rounded"
                        onClick={() => handleView(user.id)}
                      >
                        <FaEye />
                      </button>
                      <button
                        className="p-1 text-black hover:bg-gray-100 rounded"
                        onClick={() => handleEdit(user.id)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="p-1 text-black hover:bg-gray-100 rounded"
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
