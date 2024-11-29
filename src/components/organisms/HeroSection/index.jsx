<<<<<<< HEAD
import React, { useState } from "react";
import { Button } from "../../atoms";
import { SearchBar } from "../../molekules";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  const [message, setMessage] = useState(["Temukan Di Sini!"]);
=======
import React, { useState } from 'react';
import { Button } from '../../atoms';
import { SearchBar } from '../../molekules';
import Card from '../../molekules/Card';

const HeroSection = () => {
  const places = [
    { image: '/images/Kupiku Coffe Umbulharjo.jpg', title: 'Kupiku Coffee Umbulharjo', rating: 4.6 },
    { image: '/images/Loko Coffe.jpg', title: 'Loko Cafe Yogyakarta', rating: 4.6 },
    { image: '/images/lars headquartes cafe.jpg', title: 'Cozy Spot Coffee', rating: 4.6 },
  ];

  const newPlaces = [
    { image: '/images/Cafe Kebon Dalem.jpeg', title: 'Kebon Ndalem Coffee & Eatery', rating: '' },
    { image: '/images/Ekologi Coffe.jpg', title: 'Ekologi Desk and Coffe', rating: '' },
    { image: '/images/Antologi.jpeg', title: 'Antologi Collaboractive Space', rating: '' },
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPlaces = places.filter(place =>
    place.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredNewPlaces = newPlaces.filter(place =>
    place.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

>>>>>>> d7ca3dd9d69142c5cfd64f37a81672d2efc53e14
  return (
    <div className="relative flex flex-col items-start justify-between font-poppins px-4 sm:px-10 text-black min-h-screen"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1658585789455-88af58511272?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-70"></div>

      <div className="relative z-10 p-4 lg:mt-28 sm:mt-4 w-full">
        <div className="relative bottom-3 flex justify-center items-center z-10 mb-4">
          {/* Pass searchQuery and handleSearch to SearchBar */}
          <SearchBar value={searchQuery} onChange={handleSearch} />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Cari <span className="text-[#c66e4e]">Tempat Nongkrong</span> Yang Pas?
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          <Typewriter words={message} loop={false} cursor={"|"} />
        </p>
        <div className="mt-6 sm:mt-10 text-base sm:text-lg md:text-xl lg:text-xl font-medium mb-4">
          <p>Nongkrong jadi lebih seru</p>
          <p>dengan pilihan tempat yang pas dan suasana yang asik!</p>
        </div>
        <Button className="mb-4 bg-[#c66e4e] text-white">Lihat Tempat Nongkrong</Button>
      </div>

      <div className="relative z-10 w-full mt-10 px-6 sm:px-10 md:px-16 mx-auto bg-white py-8">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#c66e4e]">
          Rating Sangat Bagus
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {filteredPlaces.length === 0 ? (
            <p>No places found matching your search.</p>
          ) : (
            filteredPlaces.map((place, index) => (
              <Card key={index} image={place.image} title={place.title} rating={place.rating} />
            ))
          )}
        </div>
      </div>

      <div className="relative z-10 w-full mt-10 px-6 sm:px-10 md:px-16 mx-auto bg-gradient-to-b from-white via-[#ffe2cf] to-[#ffcbb0] py-8">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#c66e4e]">
          Baru Ditambahkan
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredNewPlaces.length === 0 ? (
            <p>No new places found matching your search.</p>
          ) : (
            filteredNewPlaces.map((place, index) => (
              <Card key={index} image={place.image} title={place.title} rating={place.rating} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
