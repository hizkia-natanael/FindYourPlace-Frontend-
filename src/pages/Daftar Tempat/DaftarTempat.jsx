import React, { useState } from "react";
import { SearchBar } from "../../components/molekules";
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
    <div className="px-6 sm:px-10 lg:px-16 py-12 bg-white">
      {/* Search Input dan Header */}
      <div className="mb-8 pt-20">
        <div className="lg:w-[660px] sm:w-auto m-auto mb-10">
          <SearchBar
            className="text-black"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            onClick={() => filteredPlaces()}
          />
        </div>

        {/* Header teks di kiri */}
        <h2 className="text-2xl md:text-3xl text-black font-bold text-left">
          <span className="mr-3">⭐</span>
          Temukan{" "}
          <span className="text-[#a04925] ml-3 mr-1">tempat nongkrong</span>
          favoritmu
        </h2>
      </div>

      {/* Daftar Tempat */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
