import React, { useEffect, useState } from "react";
import { Card, Input } from "../../components/atoms";
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
      <div className="px-6 sm:px-10 lg:px-16 py-12 bg-white">
        {/* Pencarian */}
        <div className="mb-8 pt-20">
          <div className="lg:w-[660px] sm:w-auto m-auto mb-10">
            <Input
              className=" flex-grow w-full shadow-md text-black shadow-zinc-600 border bg-white"
              placeholder="search tempat nongkrongmu...."
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
                key={index}
                name={place.name}
                image={`http://localhost:3000/uploads/${place.image}`}
                alt={place.name}
                address={place.address}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DaftarTempat;