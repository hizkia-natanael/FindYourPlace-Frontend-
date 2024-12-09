import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdLogout, MdOutlinePlace } from "react-icons/md";
import { FaHome, FaUser } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import Logo from "../../assets/logo.svg";
import { Sidebar } from "../../components/organisms";

const EditUser = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Ambil data user dan fungsi pembaruan dari state
  const { user, handleUpdateUser } = location.state || {};
  const [id, setId] = useState(user?.id || "N/A");
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [profilePic, setProfilePic] = useState(
    user?.profilePic || "https://via.placeholder.com/100"
  );
  const [showPopup, setShowPopup] = useState(false); // State untuk pop-up

  // Simpan perubahan
  const handleSave = () => {
    // Periksa apakah ada perubahan data
    if (
      id === user?.id &&
      name === user?.name &&
      email === user?.email &&
      profilePic === user?.profilePic
    ) {
      setShowPopup(true); // Tampilkan pop-up jika tidak ada perubahan
      return;
    }

    // Perbarui hanya data yang diubah
    const updatedUser = {
      ...user,
      ...(id && { id }),
      ...(name && { name }),
      ...(email && { email }),
      ...(profilePic && { profilePic }),
    };

    // Pastikan fungsi pembaruan tersedia
    if (handleUpdateUser) {
      handleUpdateUser(updatedUser); // Panggil fungsi update
      navigate("/user-detail", { state: { user: updatedUser } }); // Kembali ke halaman detail
    } else {
      setShowPopup(true); // Tampilkan pop-up jika tidak ada perubahan
      return;
    }
  };

  return (
    <div className="bg-[#E8E8E8] min-h-screen relative">
      {/* Header */}
      <div className="bg-white w-full h-[100px] px-8 flex items-center">
        <img src={Logo} alt="Logo" />
      </div>

      {/* Main Content */}
      <div className="flex h-[80vh] items-start w-full relative top-[1vh]">
        {/* Sidebar */}
        <Sidebar />

        {/* Edit User Panel */}
        <div className="bg-white flex-1 h-full rounded-lg p-10 ml-8">
          <h2 className="text-3xl font-bold mb-4">Edit User</h2>
          <div className="flex flex-col items-center space-y-6 mt-20">
            {/* Input Link Gambar */}
            <div className="flex flex-col space-y-2 w-[80%]">
              <label className="font-bold">Link Gambar:</label>
              <input
                type="text"
                value={profilePic}
                onChange={(e) => setProfilePic(e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            {/* Input Nama */}
            <div className="flex flex-col space-y-2 w-[80%]">
              <label className="font-bold">Nama User:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            {/* Input Email */}
            <div className="flex flex-col space-y-2 w-[80%]">
              <label className="font-bold">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            {/* Tombol Aksi */}
            <div className="flex justify-center w-full mt-4">
              <div className="flex space-x-4">
                <button
                  onClick={handleSave}
                  className="bg-[#C66E4E] text-white px-4 py-2 rounded"
                >
                  Simpan
                </button>
                <button
                  onClick={() => navigate("/user-detail", { state: { user } })}
                  className="bg-gray-300 text-black px-4 py-2 rounded"
                >
                  ← Kembali
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pop-Up */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 shadow-lg w-[400px] text-center">
            <h3 className="text-xl font-bold mb-4">Tidak ada perubahan</h3>
            <p>Data pengguna tidak mengalami perubahan apapun.</p>
            <button
              className="mt-4 bg-[#C66E4E] text-white px-4 py-2 rounded"
              onClick={() => setShowPopup(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditUser;
