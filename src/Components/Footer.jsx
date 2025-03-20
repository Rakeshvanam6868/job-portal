import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer=()=>{
    return(
        <>
            <div className="bg-[#00283C]   text-white flex justify-around p-20">
                 <div className="text-2xl">Job Portal</div>
                 <div className="flex flex-col gap-5">
                    <p className="text-xl">Services</p>
                    <div className="flex flex-col gap-2">
                    <p>Lorem.</p>
                    <p>Lorem.</p>
                    <p>Lorem.</p>
                    <p>Lorem.</p>
                    </div>
                 </div>
                 <div className="flex flex-col gap-5">
                    <p className="text-2xl">Contact Us</p>
                    <div className="flex gap-5">
                    <p className="text-[#00283c] bg-white hover:bg-blue-500 rounded-full  p-3 cursor-pointer flex items-center justify-center text-2xl"><FaInstagram /></p>
                    <p className="text-[#00283c] bg-white hover:bg-blue-500 rounded-full  p-3 cursor-pointer flex items-center justify-center text-2xl"><FaXTwitter /></p>
                    <p className="text-[#00283c] bg-white hover:bg-blue-500 rounded-full  p-3 cursor-pointer flex items-center justify-center text-2xl"><FaYoutube/></p>
                    <p className="text-[#00283c] bg-white hover:bg-blue-500 rounded-full  p-3 cursor-pointer flex items-center justify-center text-2xl"><FaLinkedin/></p>
                    </div>
                 </div>
            </div>
            <div className="text-center bg-[#00283C] text-white border-2 border-[#04496b] p-5">All rights reserved</div>
        </>
    );
}

export default Footer;