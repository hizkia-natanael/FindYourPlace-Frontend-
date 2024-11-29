import React, { useState } from "react";
import { Button } from "../../atoms";
import { SearchBar } from "../../molekules";
import { Typewriter } from "react-simple-typewriter";
import Card from "../../atoms/Card";
import BgImages from "/images/Rectangle 5.png";
const HeroSection = () => {
  const [message, setMessage] = useState(["Temukan Di Sini!"]);
  const BgImage = `url(${BgImages})`;
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
        backgroundImage: `${BgImage}`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 p-4 m-auto lg:mt-28 md:mt-28 sm:mt-28 mt-32 w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Cari <span className="text-[#c66e4e]">Tempat Nongkrong</span> Yang
          Pas?
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          <Typewriter words={message} loop={false} cursor={"|"} />
        </p>
        <div className="relative  flex justify-strat mt-4 z-10 mb-4">
          <SearchBar value={searchQuery} onChange={handleSearch} />
        </div>
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
