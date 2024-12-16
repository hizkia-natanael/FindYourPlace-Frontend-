import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, HamburgerMenu, Logo } from "../../atoms";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-100 shadow-md font-poppins z-50">
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

          <Link
            to="/profile"
            className="text-gray-700 text-sm hover:text-[#c66e4e]"
          >
            Profile
          </Link>
        </nav>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-[#c66e4e]"
          >
            <HamburgerMenu />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white bg-opacity-100 shadow-md py-4 px-6">
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
            <div className="flex items-center gap-4">
              {/* Icon FaUserCircle for Mobile */}
              <Link to="/profile">
                <FaUserCircle className="text-2xl text-gray-700" />
              </Link>
              <Link to="/login">
                <Button className="bg-[#c66e4e] font-medium text-white">
                  Login
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
