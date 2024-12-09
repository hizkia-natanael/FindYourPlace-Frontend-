import React, { useEffect, useState } from "react";
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
import usePlaceStore from "../../config/placeStore";
import Logo from "../../assets/logo.svg";
import { Sidebar } from "../../components/organisms";

const AllPlace = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const { places, getPlaces, deletePlace } = usePlaceStore();

  useEffect(() => {
    getPlaces();
  }, [getPlaces]);

  // Filter users based on searchTerm
  const filteredUsers = places.filter((place) =>
    place.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const heandleDelete = (id) => {
    deletePlace(id);
  };

  return (
    <div className="bg-[#E8E8E8] min-h-screen h-full">
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
              placeholder="Cari Place"
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
                <th className="text-left p-2 text-black">image</th>
                <th className="text-left p-2 text-black">Nama</th>
                <th className="text-left p-2 text-black">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((place, index) => (
                <tr key={place.id} className="border-b">
                  <td className="p-2 text-black">{index + 1}</td>
                  <td>
                    <img
                      className="w-10 p-1"
                      src={`http://localhost:3000/uploads/${place.image}`}
                      alt=""
                    />
                  </td>
                  <td className="p-2 text-black">{place.name}</td>
                  <td className="p-2">
                    <div className="flex space-x-2">
                      <button
                        className="p-1 text-black hover:bg-gray-100 rounded"
                        onClick={() => handleView(place.id)}
                      >
                        <FaEye />
                      </button>
                      <button
                        className="p-1 text-black hover:bg-gray-100 rounded"
                        onClick={() => navigate(`/edit-place/${place._id}`)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="p-1 text-black hover:bg-gray-100 rounded"
                        onClick={() => heandleDelete(place._id)}
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

export default AllPlace;
