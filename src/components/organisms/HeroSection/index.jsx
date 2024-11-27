import React from "react";
import { Button } from "../../atoms";
import { SearchBar } from "../../molekules";

const HeroSection = () => {
  return (
    <div
      className="relative flex flex-col items-start justify-center font-poppins px-4 sm:px-10 text-black min-h-screen"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1658585789455-88af58511272?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-70"></div>
      <div className="relative z-10 p-4 mt-40">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Cari <span className="text-[#c66e4e]">Tempat Nongkrong</span> Yang
          Pas?
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Temukan Di Sini!
        </p>
        <div className="mt-6 sm:mt-10 text-base sm:text-lg md:text-xl lg:text-xl font-medium mb-4">
          <p>Nongkrong jadi lebih seru</p>
          <p>dengan pilihan tempat yang pas dan suasana yang asik!</p>
        </div>
        <Button className="mb-4 bg-[#c66e4e] text-white">
          Lihat Tempat Nongkrong
        </Button>
      </div>
      <div className="relative bottom-3 w-full flex justify-center items-center z-10 mt-7">
        <SearchBar />
      </div>
    </div>
  );
};

export default HeroSection;
