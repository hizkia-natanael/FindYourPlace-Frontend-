import React, { useEffect, useState } from "react";
import { Card, SearchBar } from "../../components/molekules";
import usePlaceStore from "../../config/placeStore.js";
const DaftarTempat = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { places, getPlaces } = usePlaceStore();

  useEffect(() => {
    getPlaces();
  }, [getPlaces]);

  const filteredPlaces = places.filter((place) =>
    place.name.toLowerCase().includes(searchTerm.toLowerCase())
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
          Temukan{" "}
          <span className="text-[#a04925] ml-3 mr-1">tempat nongkrong</span>
          favoritmu
        </h2>
      </div>

      {/* Daftar Tempat */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlaces.length > 0 ? (
          filteredPlaces.map((place, index) => (
            <Card
              index={index}
              name={place.name}
              image={`http://localhost:3000/uploads/${place.image}`}
            />
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
