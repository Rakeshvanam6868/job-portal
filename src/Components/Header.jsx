import { Link } from "react-router-dom";
const Header = () => {

  return (
    <div className="w-full bg-[#00283C] flex justify-around items-center gap-10 drop-shadow-xl">
      {/* logo */}
      <div className="text-xl p-5 text-white "><Link to="/">Job Portal</Link></div>

      {/* Navbar titles */}
      <div className="flex gap-12 text-lg text-white justify-center items-center">
        <Link to="/about">About</Link>
        <Link to="/">Services</Link>
        <Link to="/contact">Contact us</Link>
      </div>
      {/* contact details */}
      <div className="flex flex-col gap-5 p-5">
        {/* {showContactDetails && ( */}
        <div className="flex gap-10 text-sm  ml-6 text-white">
          {/* <p>English</p> */}
          <p>7897897890</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
