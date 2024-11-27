import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Logo } from "../../atoms";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-70 shadow-md font-poppins z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div>
          <Logo className="w-44" />
        </div>

        <nav className="hidden md:flex gap-6">
          <Link to="/" className="text-gray-700 text-sm hover:text-[#c66e4e]">
            Beranda
          </Link>
          <Link
            to="/daftar-tempat"
            className="text-gray-700 text-sm hover:text-[#c66e4e]"
          >
            Daftar Tempat
          </Link>
          <Link
            to="/tentang-kami"
            className="text-gray-700 text-sm hover:text-[#c66e4e]"
          >
            Tentang kami
          </Link>
          <Link
            to="/kontak"
            className="text-gray-700 text-sm hover:text-[#c66e4e]"
          >
            Kontak
          </Link>
        </nav>
        <Button className="hidden md:flex bg-[#c66e4e] text-white">
          Login
        </Button>
        {/* hamburger icon */}
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
        <div className="md:hidden bg-white bg-opacity-70 shadow-md py-4 px-6">
          <nav className="flex flex-col gap-4">
            <Link
              to="/"
              className="text-gray-700 font-medium text-sm hover:text-[#c66e4e]"
            >
              Beranda
            </Link>
            <Link
              to="/daftar-tempat"
              className="text-gray-700 text-sm font-medium hover:text-[#c66e4e]"
            >
              Daftar Tempat
            </Link>
            <Link
              to="/tentang-kami"
              className="text-gray-700 text-sm font-medium hover:text-[#c66e4e]"
            >
              Tentang kami
            </Link>
            <Link
              to="/kontak"
              className="text-gray-700 text-sm font-medium hover:text-[#c66e4e]"
            >
              Kontak
            </Link>
            <Button className="bg-[#c66e4e] font-medium text-white">
              Login
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
