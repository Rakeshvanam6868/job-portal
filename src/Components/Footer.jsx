import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-[#00283C] w-full text-white flex flex-col lg:flex-row justify-around p-10 lg:p-20">
        {/* Job Portal Title */}
        <div className="text-2xl lg:text-3xl mb-5 lg:mb-0">Job Portal</div>

        {/* Services Section */}
        <div className="flex flex-col gap-2 lg:gap-5 mb-5 lg:mb-0">
          <p className="text-xl lg:text-2xl">Services</p>
          <div className="flex flex-col gap-2">
            <p>Lorem.</p>
            <p>Lorem.</p>
            <p>Lorem.</p>
            <p>Lorem.</p>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="flex flex-col gap-5">
          <p className="text-xl lg:text-2xl">Contact Us</p>
          <div className="flex  gap-5">
            <p className="text-[#00283c] bg-white hover:bg-blue-500 rounded-full p-3 cursor-pointer flex items-center justify-center text-xl lg:text-2xl">
              <FaInstagram />
            </p>
            <p className="text-[#00283c] bg-white hover:bg-blue-500 rounded-full p-3 cursor-pointer flex items-center justify-center text-xl lg:text-2xl">
              <FaXTwitter />
            </p>
            <p className="text-[#00283c] bg-white hover:bg-blue-500 rounded-full p-3 cursor-pointer flex items-center justify-center text-xl lg:text-2xl">
              <FaYoutube />
            </p>
            <p className="text-[#00283c] bg-white hover:bg-blue-500 rounded-full p-3 cursor-pointer flex items-center justify-center text-xl lg:text-2xl">
              <FaLinkedin />
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center bg-[#00283C] text-white border-2 border-[#04496b] p-5 text-sm lg:text-base">
        All rights reserved
      </div>
    </>
  );
};

export default Footer;