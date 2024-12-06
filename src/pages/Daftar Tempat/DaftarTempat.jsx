import React, { useEffect, useState } from "react";
import ReviewGambar from "./ReviewGambar";
import { Card } from "../../components/atoms";
import usePlaceStore from "../../config/placeStore.js";
import { Link } from "react-router-dom";
const DaftarTempat = ({ _id }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { places, getPlaces } = usePlaceStore();

  useEffect(() => {
    getPlaces();
  }, [getPlaces]);

  const filteredPlaces = places.filter((place) =>
    place.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* {selectedPlace ? (
        <ReviewGambar
          selectedPlace={selectedPlace}
          onBack={() => setSelectedPlace(null)}
        />
      ) : ( */}
      <div className="px-6 sm:px-10 lg:px-16 py-12 bg-white">
        {/* Pencarian */}
        <div className="mb-8 pt-20">
          <div className="lg:w-[660px] sm:w-auto m-auto mb-10">
            <input
              type="text"
              className="w-full border p-2 rounded-md focus:ring-2 focus:ring-[#a04925]"
              placeholder="Cari tempat..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <h2 className="text-2xl md:text-3xl text-black font-bold text-left">
            <span className="mr-3">⭐</span>
            Temukan{" "}
            <span className="text-[#a04925] ml-3 mr-1">tempat nongkrong</span>
            favoritmu
          </h2>
        </div>

        {/* Daftar Tempat */}

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPlaces.map((place, index) => (
            <Link to={`/review-gambar/${place._id}`}>
              <Card
                name={place.name}
                image={`http://localhost:3000/uploads/${place.image}`}
                alt={place.name}
                key={index}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DaftarTempat;
