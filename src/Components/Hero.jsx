import heroImg from "../assets/hiring1.jpg";
import HeroContent from "./HeroContent";
const Hero = () => {
    return (
        <>
            <div className="bg-[#00283C] w-full">
                {/* Image */}
                <div className="flex items-center justify-center ">
                    <img
                        className="rounded-lg "
                        src={heroImg}
                        width={1600}
                        height={867}
                        alt=""
                    />
                </div>
                <HeroContent/>
            </div>
        </>
    );
}

export default Hero;