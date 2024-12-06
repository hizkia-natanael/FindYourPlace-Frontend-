import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdLogout, MdOutlinePlace } from 'react-icons/md';
import { FaHome, FaUser, FaEye, FaEdit, FaTrash, FaSearch } from 'react-icons/fa';
import { IoIosChatbubbles } from 'react-icons/io';
import Logo from '../../assets/logo.svg';

const UserAdmin = () => {
  const navigate = useNavigate();

  // Dummy data for the Users table
  const users = [
    { id: 1, name: 'Sarah Amelia', email: 'sarah@gmail.com' },
    { id: 2, name: 'Budi Nugraha', email: 'budi@gmail.com' },
    { id: 3, name: 'Dimas Pratama', email: 'dimas@gmail.com' },
    { id: 4, name: 'Laura Putri', email: 'laura@gmail.com' },
    { id: 5, name: 'Rizky Akbar', email: 'rizky@gmail.com' },
    { id: 6, name: 'Anita Kartika', email: 'anita@gmail.com' },
    { id: 7, name: 'Citra Maharani', email: 'citra@gmail.com' },
    { id: 8, name: 'Andre Bintang', email: 'andre@gmail.com' },
  ];

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
            <p className="text-black font-bold text-center">
              Admin
            </p>
          </div>
          <button
            className="p-4 w-full h-[40px] text-black flex items-center justify-start mb-2"
            onClick={() => navigate('/')}
          >
            <FaHome className="mr-2" /> Dashboard
          </button>
          <button
            className="p-4 w-full h-[40px] text-black bg-[#C66E4E] flex items-center justify-start mb-2"
            onClick={() => navigate('/users')}
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
            onClick={() => navigate('/')}
          >
            <MdLogout className="inline-block mr-2" /> Sign out
          </button>
        </div>

        {/* Main Panel */}
        <div className="bg-white flex-1 h-full rounded-lg p-16 ml-8 flex flex-col space-y-4 items-start">
          {/* Header Controls */}
          <div className="flex justify-between w-full mb-4">
            <button className="bg-[#C66E4E] text-white px-4 py-2">+ Tambah User</button>
            <div className="flex space-x-2">
              <select className="w-[150px] border rounded px-2 py-1">
                <option>Sort By: latest</option>
              </select>
              <select className="w-[100px] border rounded px-2 py-1">
                <option>Show: 10</option>
              </select>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative w-full mb-4">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" />
            <input 
              type="text" 
              placeholder="Cari Xxxxxxx" 
              className="w-full pl-10 pr-3 py-2 border rounded"
            />
          </div>

          {/* Users Table */}
          {/* Users Table */}
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 text-black">No</th>
                  <th className="text-left p-2 text-black">Nama</th>
                  <th className="text-left p-2 text-black">Email</th>
                  <th className="text-left p-2 text-black">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id} className="border-b">
                    <td className="p-2 text-black">{index + 1}</td>
                    <td className="p-2 text-black">{user.name}</td>
                    <td className="p-2 text-black">{user.email}</td>
                    <td className="p-2">
                      <div className="flex space-x-2">
                        <button className="p-1 text-black hover:bg-gray-100 rounded">
                          <FaEye />
                        </button>
                        <button className="p-1 text-black hover:bg-gray-100 rounded">
                          <FaEdit />
                        </button>
                        <button className="p-1 text-black hover:bg-gray-100 rounded">
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