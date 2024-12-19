import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdLogout, MdOutlinePlace } from "react-icons/md";
import { FaHome, FaUser } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import Logo from "../../assets/logo.svg";
import { Sidebar } from "../../components/organisms";

const UserDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
                src="https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
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
                  value={user.username}
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
