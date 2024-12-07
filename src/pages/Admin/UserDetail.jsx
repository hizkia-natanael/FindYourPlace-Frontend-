import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdLogout, MdOutlinePlace } from "react-icons/md";
import { FaHome, FaUser } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import Logo from "../../assets/logo.svg";

const UserDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Data user yang diterima dari navigasi
  const user = location.state?.user || {
    id: "N/A",
    name: "Unknown User",
    email: "unknown@example.com",
    profilePic: "https://via.placeholder.com/100", // Placeholder image
  };

  const handleUpdateUser = location.state?.handleUpdateUser;

  const handleEditUser = () => {
    navigate("/edit-user", { state: { user, handleUpdateUser } });
  };

  return (
    <div className="bg-[#E8E8E8] min-h-screen">
      {/* Header */}
      <div className="bg-white w-full h-[100px] px-8 flex items-center">
        <img src={Logo} alt="Logo" />
      </div>

      {/* Main Content */}
      <div className="flex h-[80vh] items-start w-full relative top-[1vh]">
        {/* Sidebar */}
        <div className="bg-white w-[252px] p-10 rounded-br-lg h-full flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww"
            alt="Profile"
            className="rounded-full w-[120px] h-[120px] my-3"
          />
          <div className="w-full mt-2">
            <p className="text-black text-center">
              Welcome, <span className="font-bold">{user.name}</span>!
            </p>
            <p className="text-black font-bold text-center">{user.id}</p>
          </div>
          <button
            className="p-4 w-full h-[40px] text-black flex items-center justify-start mb-2"
            onClick={() => navigate("/admin")}
          >
            <FaHome className="mr-2" /> Dashboard
          </button>
          <button
            className="p-4 w-full h-[40px] text-black bg-[#C66E4E] flex items-center justify-start mb-2"
            onClick={() => navigate("/users")}
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

        {/* User Detail Panel */}
        <div className="bg-white flex-1 h-full rounded-lg p-7 ml-8">
          <h2 className="text-3xl font-bold mb-4">Detail User</h2>
          <div className="flex flex-col items-center space-y-4">
            {/* Profil User */}
            <div className="flex flex-col items-center justify-center space-y-3">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww"
                alt="User Profile"
                className="rounded-full w-[120px] h-[120px]"
              />
              <p className="text-black font-bold">{user.name}</p>
            </div>

            {/* Detail User */}
            <div className="w-[80%]">
              <div className="flex flex-col space-y-2">
                <label className="font-bold">Nomor:</label>
                <input
                  type="text"
                  value={user.id}
                  readOnly
                  className="w-full border rounded px-3 py-2"
                />
              </div>
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

            {/* Tombol Aksi */}
            <div className="flex justify-center w-full mt-6">
              <button
                onClick={handleEditUser}
                className="bg-[#C66E4E] text-white px-4 py-2 rounded mr-4"
              >
                Edit
              </button>
              <button
                onClick={() => navigate("/user-admin")}
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
