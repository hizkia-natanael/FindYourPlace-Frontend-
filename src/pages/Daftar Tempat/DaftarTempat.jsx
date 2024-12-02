import React, { useState } from "react";

const ReviewGambar = ({ selectedPlace, onBack }) => {
  const [reviews, setReviews] = useState([
    {
      name: "Nisa",
      rating: "Bagus Sekali",
      text: "Tempat yang bagus cocok untuk bersantai dengan keluarga",
      date: "20 September 2024",
    },
    {
      name: "Budi",
      rating: "Biasa",
      text: "Tempatnya Bgaus...",
      date: "3 Oktober 2024",
    },
  ]);

  const [reviewInput, setReviewInput] = useState("");
  const [ratingInput, setRatingInput] = useState("");

  const addReview = () => {
    if (reviewInput.trim() && ratingInput) {
      setReviews([
        ...reviews,
        {
          name: "Anonymous",
          rating: ratingInput,
          text: reviewInput,
          date: new Date().toLocaleDateString("id-ID"),
        },
      ]);
      setReviewInput("");
      setRatingInput("");
    } else {
      alert("Harap isi ulasan dan pilih rating.");
    }
  };

  return (
    <div className="px-6 sm:px-10 lg:px-16 py-12 bg-gray-100">
      <button
        className="bg-gray-300 text-black px-4 py-2 rounded-md mb-4 hover:bg-gray-400 transition"
        onClick={onBack}
      >
        ← Kembali ke Daftar Tempat
      </button>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-[#a04925]">{selectedPlace.title}</h1>
        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <img
              src={selectedPlace.image}
              alt={selectedPlace.title}
              className="w-full h-72 object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col space-y-4 w-1/3">
            {[...Array(3)].map((_, index) => (
              <img
                key={index}
                src={selectedPlace.image} // Ganti dengan gambar berbeda sesuai kebutuhan
                alt={selectedPlace.title}
                className="w-full h-32 object-cover rounded-md"
              />
            ))}
          </div>
        </div>
        <p className="text-gray-700 mt-4">{selectedPlace.description}</p>
        <p className="text-gray-600 mt-2">
          <strong>Alamat:</strong> {selectedPlace.address}
        </p>
        <p className="text-gray-600 mt-2">
          <strong>Fasilitas:</strong> {selectedPlace.facilities}
        </p>
        <p className="text-gray-600 mt-2">
          <strong>hours:</strong> {selectedPlace.hours}
        </p>
        <p className="text-gray-600 mt-2">
          <strong>phoneNumber:</strong> {selectedPlace.phoneNumber}
        </p>
        <a
          href={selectedPlace.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#a04925] underline hover:text-[#872d1a]"
        >
          Lihat di Google Maps
        </a>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Ulasan</h2>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="bg-white shadow-sm rounded-md p-4 mb-4">
              <p className="font-bold text-[#a04925]">{review.name}</p>
              <p className="text-gray-700">{review.text}</p>
              <p className="text-sm text-gray-500">{review.date}</p>
              <p className="text-sm text-[#a04925] font-semibold">{review.rating}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">Belum ada ulasan. Jadilah yang pertama memberikan ulasan!</p>
        )}
      </div>
      <div className="bg-white shadow-md rounded-md p-6">
        <h2 className="text-xl font-semibold mb-3">Tambah Ulasan</h2>
        <textarea
          value={reviewInput}
          onChange={(e) => setReviewInput(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#a04925]"
          placeholder="Berikan pendapatmu tentang tempat ini"
        ></textarea>
        <div className="mb-4">
          <h3 className="mb-2">Pilih Rating:</h3>
          {["Bagus Sekali", "Bagus", "Biasa", "Buruk", "Buruk Sekali"].map((rating) => (
            <label key={rating} className="mr-4">
              <input
                type="radio"
                name="rating"
                value={rating}
                onChange={(e) => setRatingInput(e.target.value)}
              />{" "}
              {rating}
            </label>
          ))}
        </div>
        <button
          onClick={addReview}
          className="bg-[#a04925] text-white px-4 py-2 rounded-md hover:bg-[#872d1a] transition"
        >
          Kirim Ulasan
        </button>
      </div>
    </div>
  );
};

const DaftarTempat = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [places] = useState([
    {
      image: "/images/Kupiku Coffe Umbulharjo.jpg",
      title: "Kupiku Coffe Umbulharjo",
      address: "Jl. Umbulharjo No. 123, Yogyakarta",
      description: "Kedai kopi dengan suasana santai dan nyaman.",
      facilities: "Wi-Fi Gratis, Outdoor Seating, Stop Kontak",
      hours: "Setiap hari, 08.00 - 01.00",
      phoneNumber: "08992266010",
      mapsUrl: "https://www.google.com/maps?q=Kupiku+Coffe+Umbulharjo",
    },
    {
      image: "/images/blanco-coffee-book.jpg",
      title: "Blanco Coffee and Books",
      address: "Jl. Kemang Raya No. 45, Yogyakarta",
      description: "Tempat yang cocok untuk pecinta kopi dan buku.",
      facilities: "Perpustakaan Mini, Wi-Fi Gratis, Menu Vegan",
      hours: "Setiap hari, 08.00 - 00.00",
      phoneNumber: "02742923354",
      mapsUrl: "https://www.google.com/maps?q=Blanco+Coffee+and+Books",
    },
    {
      image: "/images/Oppio coffe.jpg",
      title: "Oppio",
      address: "Jl. Nglengkong Besi No.11, Area Sawah, Sukoharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581",
      description: "Kopi nikmat di tengah kota.",
      facilities: "Wi-Fi Gratis, Parkir Luas, Menu Sarapan",
      hours: " Senin,Rabu,Kamis,Jumat,Sabtu, 14.00 - 22.00",
      phoneNumber: "081239999082",
      mapsUrl: "https://www.google.com/maps/place/OPPIO/@-7.707374,110.422012,15z/data=!4m6!3m5!1s0x2e7a5fc2b64300ab:0xea64d6bc2c0035a5!8m2!3d-7.707374!4d110.422012!16s%2Fg%2F11pkbw222t?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D",
    },
    {
      image: "/images/Carney Co.jpg",
      title: "Carney Co  Cafe",
      address: "Jl. Diponegoro No. 90, Bandung",
      description: "Cafe modern dengan menu lengkap.",
      facilities: "Ruangan AC, Private Room, Live Music",
      hours: "Setiap Hari, 10.00 - 01.00",
      phoneNumber: "081239999082",
      mapsUrl: "https://www.google.com/maps?q=Carney+Co+Cafe",
    },
  ]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const filteredPlaces = places.filter((place) =>
    place.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {selectedPlace ? (
        <ReviewGambar
          selectedPlace={selectedPlace}
          onBack={() => setSelectedPlace(null)}
        />
      ) : (
        <div className="px-6 sm:px-10 lg:px-16 py-12 bg-white">
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
              <span className="text-[#a04925] ml-3 mr-1">
                tempat nongkrong
              </span>
              favoritmu
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPlaces.map((place) => (
              <div
                key={place.title}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition cursor-pointer"
                onClick={() => setSelectedPlace(place)}
              >
                <img
                  src={place.image}
                  alt={place.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold text-[#a04925]">{place.title}</h3>
                <p className="text-sm text-gray-600">{place.address}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DaftarTempat;
