import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, HamburgerMenu, Logo } from "../../atoms";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
<<<<<<< HEAD
    <header className="fixed top-0 left-0 w-full bg-white  shadow-md font-poppins z-50">
=======
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-100 shadow-md font-poppins z-50">
>>>>>>> d7ca3dd9d69142c5cfd64f37a81672d2efc53e14
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
        <Link to="/login">
        <Button className="hidden md:flex bg-[#c66e4e] text-white">
          Login
        </Button>
        </Link>
       
        {/* hamburger icon */}
        <div className="md:hidden flex items-center">
          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-[#c66e4e]"
          >
            <HamburgerMenu />
          </Button>
        </div>
      </div>

      {/* Mobile */}
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
