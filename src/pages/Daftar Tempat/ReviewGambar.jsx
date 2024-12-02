import React, { useState } from "react";

const ReviewGambar = ({ selectedPlace, onBack }) => {
  const [reviews, setReviews] = useState([
    {
      name: "Nisa",
      rating: "Bagus Sekali",
      text: "Tempat yang bagus cocok untuk bersantai dengan keluarga",
      date: "20 September 2024",
    },
    {
      name: "Budi",
      rating: "Biasa",
      text: "Lorem Ipsum dolor sit amet...",
      date: "3 Oktober 2024",
    },
  ]);

  const [reviewInput, setReviewInput] = useState("");
  const [ratingInput, setRatingInput] = useState("");

  const addReview = () => {
    if (reviewInput.trim() && ratingInput) {
      setReviews([
        ...reviews,
        {
          name: "Anonymous",
          rating: ratingInput,
          text: reviewInput,
          date: new Date().toLocaleDateString("id-ID"),
        },
      ]);
      setReviewInput("");
      setRatingInput("");
    } else {
      alert("Harap isi ulasan dan pilih rating.");
    }
  };

  return (
    <div className="px-6 sm:px-10 lg:px-16 py-12 bg-gray-100">
      <button
        className="bg-gray-300 text-black px-4 py-2 rounded-md mb-4"
        onClick={onBack}
      >
        ← Kembali
      </button>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-[#a04925]">
          {selectedPlace.title}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img
            src={selectedPlace.image}
            alt={selectedPlace.title}
            className="w-full h-64 object-cover rounded-md"
          />
          <div className="space-y-2">
            <div>
              <h3 className="text-lg font-semibold text-[#a04925]">Alamat</h3>
              <p className="text-gray-700">
                Gunung Kidul, Yogyakarta, Jalan Wonosari
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#a04925]">Maps</h3>
              <p className="text-blue-500 underline">Google Maps: http://</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ulasan Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4 text-[#a04925]">Ulasan</h2>
        <div className="space-y-4">
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white shadow-sm rounded-md p-4 border border-gray-200"
              >
                <div className="flex justify-between">
                  <p className="font-bold text-[#a04925]">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
                <p className="text-gray-700 mt-2">{review.text}</p>
                <p className="text-sm text-[#a04925] font-semibold mt-1">
                  Rating: {review.rating}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">
              Belum ada ulasan. Jadilah yang pertama memberikan ulasan!
            </p>
          )}
        </div>
      </div>

      {/* Tambah Ulasan Section */}
      <div className="bg-white shadow-md rounded-md p-6 border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-[#a04925]">
          Tambah Ulasan
        </h2>
        <textarea
          value={reviewInput}
          onChange={(e) => setReviewInput(e.target.value)}
          className="w-full border-gray-300 rounded-md p-2 mb-4"
          placeholder="Berikan pendapatmu tentang tempat ini"
        ></textarea>
        <div className="mb-4">
          <h3 className="mb-2">Pilih Rating:</h3>
          {["Bagus Sekali", "Bagus", "Biasa", "Buruk", "Buruk Sekali"].map(
            (rating) => (
              <label key={rating} className="mr-4">
                <input
                  type="radio"
                  name="rating"
                  value={rating}
                  onChange={(e) => setRatingInput(e.target.value)}
                />{" "}
                {rating}
              </label>
            )
          )}
        </div>
        <button
          onClick={addReview}
          className="bg-[#a04925] text-white px-4 py-2 rounded-md hover:bg-[#872d1a] transition"
        >
          Kirim
        </button>
      </div>
    </div>
  );
};

export default ReviewGambar;
