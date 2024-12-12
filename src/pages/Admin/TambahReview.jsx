import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdLogout, MdOutlinePlace } from "react-icons/md";
import { FaHome, FaSave, FaUser } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import Logo from "../../assets/logo.svg";
import { Sidebar } from "../../components/organisms";

const TambahReview = () => {
  const navigate = useNavigate();

  const places = ["Kupiku Coffee", "Blanco Coffee", "Oppio Coffee"]; // Dummy data for places
  const users = [
    "Sarah Amelia",
    "Budi Nugraha",
    "Dimas Pratama",
    "Laura Putri",
  ]; // Dummy data for users

  // Initialize the review data with empty fields
  const [review, setReview] = useState({
    nomor: "", // This will be assigned automatically
    name: "",
    place: "",
    review: "",
    rating: "",
    createdAt: new Date().toISOString().split("T")[0], // Initialize with current date
  });

  useEffect(() => {

    const highestNomor = existingReviews.reduce(
      (max, review) => Math.max(max, review.nomor),
      0
    );

    // Set the "nomor" for the new review
    setReview((prevReview) => ({
      ...prevReview,
      nomor: highestNomor + 1,
    }));
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  // Handle form submission (e.g., save changes)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the save logic here
    console.log("Review added:", review);
    navigate("/review-admin"); // Navigate back to reviews page after saving
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
        <Sidebar />

        {/* Main Panel */}
        <div className="bg-white flex-1 rounded-lg p-7 ml-8">
          <h2 className="text-3xl font-bold mb-4">Tambah Review</h2>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div className="flex items-center">
              <label className="font-bold text-gray-600 w-[150px]">
                Nomor:
              </label>
              <input
                type="text"
                name="nomor"
                value={review.nomor}
                placeholder="Nomor"
                onChange={handleChange}
                className="flex-1 bg-white border border-black p-4 rounded-lg"
                readOnly
              />
            </div>
            <div className="flex items-center">
              <label className="font-bold text-gray-600 w-[150px]">
                Nama User:
              </label>
              <select
                name="name"
                value={review.name}
                onChange={handleChange}
                className="flex-1 bg-white border border-black p-4 rounded-lg"
              >
                <option value="" disabled>
                  Pilih User
                </option>
                {users.map((user) => (
                  <option key={user} value={user}>
                    {user}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center">
              <label className="font-bold text-gray-600 w-[150px]">
                Nama Tempat:
              </label>
              <select
                name="place"
                value={review.place}
                onChange={handleChange}
                className="flex-1 bg-white border border-black p-4 rounded-lg"
              >
                <option value="" disabled>
                  Pilih Place
                </option>
                {places.map((place) => (
                  <option key={place} value={place}>
                    {place}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center">
              <label className="font-bold text-gray-600 w-[150px]">
                Isi Review:
              </label>
              <textarea
                name="review"
                value={review.review}
                placeholder="Isi Review"
                onChange={handleChange}
                className="flex-1 bg-white border border-black p-4 rounded-lg"
              />
            </div>
            <div className="flex items-center">
              <label className="font-bold text-gray-600 w-[150px]">
                Rating:
              </label>
              <select
                name="rating"
                value={review.rating}
                onChange={handleChange}
                className="flex-1 bg-white border border-black p-4 rounded-lg"
              >
                <option value="" disabled>
                  Pilih Rating
                </option>
                <option value="Bagus sekali">Bagus sekali</option>
                <option value="Bagus">Bagus</option>
                <option value="Biasa">Biasa</option>
                <option value="Buruk">Buruk</option>
                <option value="Buruk sekali">Buruk sekali</option>
              </select>
            </div>
            <div className="flex items-center">
              <label className="font-bold text-gray-600 w-[150px]">
                Created At:
              </label>
              <input
                type="text"
                name="createdAt"
                value={review.createdAt}
                placeholder="Created At"
                onChange={handleChange}
                className="flex-1 bg-white border border-black p-4 rounded-lg"
                readOnly
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center w-full mt-4">
              <button
                type="submit"
                className="bg-[#C66E4E] text-white px-4 py-2 rounded mr-4"
              >
                <FaSave className="inline-block mr-2" />
                Simpan Review
              </button>
              <button
                onClick={() => navigate("/review-admin")}
                className="bg-gray-300 text-black px-4 py-2 rounded"
              >
                Kembali
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TambahReview;
