import React from "react";

const InfoSection = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start  justify-between text-black bg-white p-6 sm:p-10 rounded-lg shadow-lg font-poppins">
      <div className="flex gap-4 mb-6  sm:mb-0">
        <div className="w-36 h-44  bg-gray-300 rounded-md shadow-md hidden sm:block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1658585789455-88af58511272?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Tempat Nongkrong"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-36 h-44  bg-gray-300 rounded-md hidden sm:block shadow-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1658585789455-88af58511272?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Tempat Nongkrong"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="sm:ml-8 text-start sm:text-left">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Temukan{" "}
          <span className="text-[#c66e4e]">Tempat Nongkrong Idealmu</span>{" "}
          <br />
          Di <span className="text-[#c66e4e]">FindYourPlace</span>
        </h2>
        <div className="text-sm sm:text-base leading-6">
          <p className="mb-4">
            <strong>01. Informasi Lengkap</strong> <br />
            Deskripsi tempat lengkap meliputi kategori seperti fasilitas
            indoor/outdoor, working space, ruang meeting, area merokok, Wi-Fi
            gratis, dan rentang harga.
          </p>
          <p className="mb-4">
            <strong>02. Ulasan Terpercaya</strong> <br />
            Baca ulasan pengunjung lain dan bagikan pengalamanmu!
          </p>
          <p>
            <strong>03. Usulkan Rekomendasi</strong> <br />
            Tempat favoritmu belum terdaftar di dalam website? Usulkan
            rekomendasi lewat WhatsApp!
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
