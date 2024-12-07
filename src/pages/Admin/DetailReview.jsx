import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdLogout, MdOutlinePlace } from 'react-icons/md';
import { FaHome, FaUser, FaEdit } from 'react-icons/fa';
import { IoIosChatbubbles } from 'react-icons/io';
import Logo from '../../assets/logo.svg';

const DetailReview = () => {
  const navigate = useNavigate();
  const [review, setReview] = useState(null);

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
    setReview(dummyReview);
  }, []);

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
          <h2 className="text-3xl font-bold mb-4">Detail Review</h2>
          {review ? (
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <label className="font-bold text-gray-600 w-[150px]">Nomor:</label>
                <div className="flex-1 bg-white border border-black p-4 rounded-lg">
                  <p className="text-black">{review.nomor}</p>
                </div>
              </div>
              <div className="flex items-center">
                <label className="font-bold text-gray-600 w-[150px]">Nama User:</label>
                <div className="flex-1 bg-white border border-black p-4 rounded-lg">
                  <p className="text-black">{review.name}</p>
                </div>
              </div>
              <div className="flex items-center">
                <label className="font-bold text-gray-600 w-[150px]">Nama Tempat:</label>
                <div className="flex-1 bg-white border border-black p-4 rounded-lg">
                  <p className="text-black">{review.place}</p>
                </div>
              </div>
              <div className="flex items-center">
                <label className="font-bold text-gray-600 w-[150px]">Isi Review:</label>
                <div className="flex-1 bg-white border border-black p-4 rounded-lg">
                  <p className="text-black">{review.review}</p>
                </div>
              </div>
              <div className="flex items-center">
                <label className="font-bold text-gray-600 w-[150px]">Rating:</label>
                <div className="flex-1 bg-white border border-black p-4 rounded-lg">
                  <p className="text-black">{review.rating}</p>
                </div>
              </div>
              <div className="flex items-center">
                <label className="font-bold text-gray-600 w-[150px]">Created At:</label>
                <div className="flex-1 bg-white border border-black p-4 rounded-lg">
                  <p className="text-black">{review.createdAt}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center w-full mt-4">
                <button className="bg-[#C66E4E] text-white px-4 py-2 rounded mr-4" onClick={() => navigate('/edit-review', { state: { review } })}>
                  <FaEdit className="inline-block mr-2" /> Edit Review
                </button>
                <button
                  onClick={() => navigate('/review-admin')}
                  className="bg-gray-300 text-black px-4 py-2 rounded"
                >
                  Kembali
                </button>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailReview;
