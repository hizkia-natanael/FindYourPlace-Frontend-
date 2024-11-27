import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../atoms";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md font-poppins">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="relative text-2xl font-bold text-black">
          <div className="relative z-10">
            FindYour<span className="text-[#c66e4e]">Place</span>
          </div>
          <div className="absolute bg-[#c66e4e] w-6 h-6 lg:w-7 lg:h-7 rounded-full top-[-5px] left-[-10px] lg:top-[-10px] lg:left-[-20px] z-0"></div>
        </div>

        <nav className="hidden md:flex gap-6">
          <Link to={"#"} className="text-gray-700 text-sm hover:text-[#c66e4e]">
            Beranda
          </Link>
          <Link to={"#"} className="text-gray-700 text-sm hover:text-[#c66e4e]">
            Daftar Tempat
          </Link>
          <Link to={"#"} className="text-gray-700 text-sm hover:text-[#c66e4e]">
            Tentang kami
          </Link>
          <Link to={"#"} className="text-gray-700 text-sm hover:text-[#c66e4e]">
            Kontak
          </Link>
        </nav>
        <Button className="hidden md:flex bg-[#c66e4e] text-white">
          Login
        </Button>
        {/* hamberger icon */}
        <div className="md:hidden flex items-center">
          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-[#c66e4e]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-6">
          <nav className="flex flex-col gap-4">
            <Link
              to={"#"}
              className="text-gray-700 text-sm hover:text-[#c66e4e]"
            >
              Beranda
            </Link>
            <Link
              to={"#"}
              className="text-gray-700 text-sm hover:text-[#c66e4e]"
            >
              Daftar Tempat
            </Link>
            <Link
              to={"#"}
              className="text-gray-700 text-sm hover:text-[#c66e4e]"
            >
              Tentang kami
            </Link>
            <Link
              to={"#"}
              className="text-gray-700 text-sm hover:text-[#c66e4e]"
            >
              Kontak
            </Link>
            <Button className="bg-[#c66e4e] text-white">Login</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
