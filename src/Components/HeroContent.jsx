import { heroData } from "../utils/heroData";

const HeroContent = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center justify-center px-5 sm:px-10 md:px-20 lg:px-20 py-10 sm:py-20 lg:py-40">
      {heroData.map((data) => (
        <div
          key={data.id}
          className="flex flex-col gap-5 sm:gap-8 lg:gap-10 justify-center items-center text-center px-2 sm:px-4 text-white"
        >
          {/* Icon */}
          <i className="text-4xl sm:text-5xl font-light">{data.icon}</i>

          {/* Title */}
          <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">
            {data.title}
          </h1>

          {/* Subtitle */}
          <p className="font-semibold text-sm sm:text-base lg:text-lg">
            {data.subTitle}
          </p>

          {/* Button */}
          <button
            className="border-2 border-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full 
                       hover:bg-white hover:text-[#00283C] text-sm sm:text-base lg:text-lg"
          >
            {data.button}
          </button>
        </div>
      ))}
    </div>
  );
};

export default HeroContent;