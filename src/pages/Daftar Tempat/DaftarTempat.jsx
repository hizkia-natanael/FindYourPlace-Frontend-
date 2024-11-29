import React, { useState } from "react";

const DaftarTempat = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State untuk search input
  const [places] = useState([
    {
      image: "/images/Kupiku Coffe Umbulharjo.jpg",
      title: "Kupiku Coffe Umbulharjo",
      
    },
    {
      image: "/images/blanco-coffee-book.jpg",
      title: "Blanco Coffee and Books",
    },
    {
      image: "/images/Oppio coffe.jpg",
      title: "Oppio Coffee",
    },
    {
      image: "/images/Carney Co.jpg",
      title: "Carney Co  Cafe",
    },
  ]);

  // Filter tempat berdasarkan search term
  const filteredPlaces = places.filter((place) =>
    place.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-6 sm:px-10 lg:px-16 py-12">
      {/* Search Input dan Header */}
      <div className="mb-8 pt-20">
        {/* Search bar */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Cari tempat nongkrong..."
            className="border border-gray-300 rounded-l-lg px-6 py-3 w-2/3 max-w-md focus:outline-none focus:ring-2 focus:ring-[#a04925]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="bg-[#a04925] text-white px-8 py-3 rounded-r-lg hover:bg-[#81371a] transition-colors"
            onClick={() => console.log("Mencari:", searchTerm)}
          >
            Cari
          </button>
        </div>

        {/* Header teks di kiri */}
        <h2 className="text-2xl md:text-3xl font-bold text-left">
          <span className="mr-3">⭐</span>
          Temukan{" "}
          <span className="text-[#a04925] ml-3 mr-1">tempat nongkrong</span>
          favoritmu
        </h2>
      </div>

      {/* Daftar Tempat */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlaces.length > 0 ? (
          filteredPlaces.map((place, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={place.image}
                alt={place.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {place.title}
                </h3>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 col-span-3 text-center">
            Tidak ada tempat yang cocok dengan pencarian Anda.
          </p>
        )}
      </div>
    </div>
  );
};

export default DaftarTempat;