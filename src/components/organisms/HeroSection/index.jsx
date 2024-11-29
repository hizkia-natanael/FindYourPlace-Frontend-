import React, { useState } from "react";
import { Button } from "../../atoms";
import { SearchBar } from "../../molekules";
import { Typewriter } from "react-simple-typewriter";
import Card from "../../atoms/Card";

const HeroSection = () => {
  const [message, setMessage] = useState(["Temukan Di Sini!"]);

  const places = [
    {
      image: "/images/Kupiku Coffe Umbulharjo.jpg",
      title: "Kupiku Coffee Umbulharjo",
      rating: 4.6,
    },
    {
      image: "/images/Loko Coffe.jpg",
      title: "Loko Cafe Yogyakarta",
      rating: 4.6,
    },
    {
      image: "/images/lars headquartes cafe.jpg",
      title: "Cozy Spot Coffee",
      rating: 4.6,
    },
  ];

  const newPlaces = [
    {
      image: "/images/Cafe Kebon Dalem.jpeg",
      title: "Kebon Ndalem Coffee & Eatery",
      rating: "",
    },
    {
      image: "/images/Ekologi Coffe.jpg",
      title: "Ekologi Desk and Coffe",
      rating: "",
    },
    {
      image: "/images/Antologi.jpeg",
      title: "Antologi Collaboractive Space",
      rating: "",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPlaces = places.filter((place) =>
    place.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredNewPlaces = newPlaces.filter((place) =>
    place.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className="relative flex flex-col items-start justify-center m-auto font-poppins px-4 sm:px-10 text-black min-h-screen bg-white"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1658585789455-88af58511272?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-70"></div>

      <div className="relative z-10 p-4 m-auto lg:mt-28 md:mt-28 sm:mt-28 mt-32 w-full">
        <div className="relative bottom-3 flex justify-center items-center z-10 mb-4">
          <SearchBar value={searchQuery} onChange={handleSearch} />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Cari <span className="text-[#c66e4e]">Tempat Nongkrong</span> Yang
          Pas?
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          <Typewriter words={message} loop={false} cursor={"|"} />
        </p>
        <div className="mt-6 sm:mt-10 text-base sm:text-lg md:text-xl lg:text-xl font-medium mb-4">
          <p>Nongkrong jadi lebih seru</p>
          <p>dengan pilihan tempat yang pas dan suasana yang asik!</p>
        </div>
        <Button className="mb-4 bg-[#c66e4e] text-white">
          Lihat Tempat Nongkrong
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
