import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdLogout, MdOutlinePlace } from 'react-icons/md';
import { FaHome, FaUser, FaSave } from 'react-icons/fa';
import { IoIosChatbubbles } from 'react-icons/io';
import Logo from '../../assets/logo.svg';

const EditReview = () => {
  const navigate = useNavigate();
  const [editableReview, setEditableReview] = useState(null);

  const places = ['Kupiku Coffee', 'Blanco Coffee', 'Oppio Coffee']; // Dummy data for places
  const users = ['Sarah Amelia', 'Budi Nugraha', 'Dimas Pratama', 'Laura Putri']; // Dummy data for users

  useEffect(() => {
    // Using dummy data for review
    const dummyReview = {
      nomor: 1,
      name: 'Sarah Amelia',
      place: 'Kupiku Coffee',
      review: 'Tempatnya sangat nyaman dan estetik.',
      rating: 'Bagus sekali',
      createdAt: '2024-12-07',
    };
    setEditableReview(dummyReview);
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  // Handle form submission (e.g., save changes)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the save logic here
    console.log('Review saved:', editableReview);
    navigate('/review-admin'); // Navigate back to reviews page after saving
  };

  return (
    <div className="bg-[#E8E8E8] min-h-screen">
      {/* Header */}
      <div className="bg-white w-full h-[100px] px-8 flex items-center">
        <img src={Logo} alt="Logo" />
      </div>

      {/* Main Content */}
      <div className="flex items-start w-full relative top-[1vh]">
        {/* Sidebar */}
        <div className="bg-white w-[252px] p-10 rounded-br-lg h-[90vh] flex flex-col items-center">
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
            onClick={() => navigate('/')}
          >
            <FaHome className="mr-2" /> Dashboard
          </button>
          <button
            className="p-4 w-full h-[40px] text-black flex items-center justify-start mb-2"
            onClick={() => navigate('/user-admin')}
          >
            <FaUser className="mr-2" /> Users
          </button>
          <button className="p-4 w-full h-[40px] text-black bg-white flex items-center justify-start mb-2"
          onClick={() => navigate('/place-admin')}
          >
            <MdOutlinePlace className="mr-2" /> Places
          </button>
          <button className="p-4 w-full h-[40px] text-black bg-[#C66E4E] flex items-center justify-start mb-2"
          onClick={() => navigate('/review-admin')}
          >
            <IoIosChatbubbles className="mr-2" /> Reviews
          </button>
          <button 
            className="w-[130px] h-[40px] bg-[#C66E4E] mt-5"
            onClick={() => navigate('/login')}
          >
            <MdLogout className="inline-block mr-2" /> Sign out
          </button>
        </div>

        {/* Main Panel */}
        <div className="bg-white flex-1 rounded-lg p-7 ml-8">
          <h2 className="text-3xl font-bold mb-4">Edit Review</h2>
          {editableReview ? (
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <div className="flex items-center">
                <label className="font-bold text-gray-600 w-[150px]">Nomor:</label>
                <input
                  type="text"
                  name="nomor"
                  value={editableReview.nomor}
                  onChange={handleChange}
                  className="flex-1 bg-white border border-black p-4 rounded-lg"
                  readOnly
                />
              </div>
              <div className="flex items-center">
                <label className="font-bold text-gray-600 w-[150px]">Nama User:</label>
                <select
                  name="name"
                  value={editableReview.name}
                  onChange={handleChange}
                  className="flex-1 bg-white border border-black p-4 rounded-lg"
                >
                  {users.map((user) => (
                    <option key={user} value={user}>
                      {user}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center">
                <label className="font-bold text-gray-600 w-[150px]">Nama Tempat:</label>
                <select
                  name="place"
                  value={editableReview.place}
                  onChange={handleChange}
                  className="flex-1 bg-white border border-black p-4 rounded-lg"
                >
                  {places.map((place) => (
                    <option key={place} value={place}>
                      {place}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center">
                <label className="font-bold text-gray-600 w-[150px]">Isi Review:</label>
                <textarea
                  name="review"
                  value={editableReview.review}
                  onChange={handleChange}
                  className="flex-1 bg-white border border-black p-4 rounded-lg"
                />
              </div>
              <div className="flex items-center">
                <label className="font-bold text-gray-600 w-[150px]">Rating:</label>
                <select
                  name="rating"
                  value={editableReview.rating}
                  onChange={handleChange}
                  className="flex-1 bg-white border border-black p-4 rounded-lg"
                >
                  <option value="Bagus sekali">Bagus sekali</option>
                  <option value="Bagus">Bagus</option>
                  <option value="Biasa">Biasa</option>
                  <option value="Buruk">Buruk</option>
                  <option value="Buruk sekali">Buruk sekali</option>
                </select>
              </div>
              <div className="flex items-center">
                <label className="font-bold text-gray-600 w-[150px]">Created At:</label>
                <input
                  type="text"
                  name="createdAt"
                  value={editableReview.createdAt}
                  onChange={handleChange}
                  className="flex-1 bg-white border border-black p-4 rounded-lg"
                  readOnly
                />
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center w-full mt-4">
                <button type="submit" className="bg-[#C66E4E] text-white px-4 py-2 rounded mr-4">
                  <FaSave className="inline-block mr-2" /> Simpan Perubahan
                </button>
                <button
                onClick={() => navigate(-1)} // Navigate ke halaman sebelumnya
                className="bg-gray-300 text-black px-4 py-2 rounded"
                >
                  Kembali
                </button>
              </div>
            </form>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditReview;
