import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`${
      isMenuOpen ? " pt-20" : ""
    } w-full bg-[#00283C] flex  lg:flex-row justify-between items-center p-4 drop-shadow-xl`}>
      {/* Logo */}
      <div className="text-xl text-white lg:text-2xl font-bold">
        <Link to="/">Job Portal</Link>
      </div>

      {/* Hamburger Menu (Visible on Mobile) */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Navbar Links (Hidden on Mobile by Default) */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row gap-5 lg:gap-10 text-lg text-white absolute lg:relative  left-0 w-full lg:w-auto bg-[#00283C] p-5 lg:p-0`}
      >
        {/* Close Button (Visible Only in Mobile Menu) */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="self-end text-white text-xl lg:hidden focus:outline-none"
        >
          X
        </button>

        {/* Menu Links */}
        <Link to="/about">About</Link>
        <Link to="/">Services</Link>
        <Link to="/contact">Contact us</Link>
      </div>

      {/* Contact Details (Visible on Larger Screens) */}
      <div className="hidden lg:flex flex-col gap-2 text-sm text-white ml-6">
        <p>📞 9999999999</p>
      </div>
    </div>
  );
};

export default Header;