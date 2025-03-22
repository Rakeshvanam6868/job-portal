import aboutImg from "../assets/aboutRandomImage.png";

const AboutUs = () => {
  return (
    <div className="bg-[#00283C] w-full flex flex-col justify-center items-center gap-8 sm:gap-12 pt-16 pb-20">
      {/* Title */}
      <p className="text-white text-center text-[14px] sm:text-base font-bold">
        ABOUT
      </p>

      {/* Main Content */}
      <div className="flex flex-col text-white justify-center items-center gap-6 sm:gap-8">
        {/* Heading */}
        <p className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold w-full sm:w-[650px] lg:w-[750px]">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>

        {/* Subheading */}
        <p className="text-sm sm:text-base lg:text-lg text-center font-medium w-full sm:w-[750px] lg:w-[850px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quos
          necessitatibus rerum. Fuga atque omnis aliquam modi amet accusamus
          libero quibusdam molestias quaerat. Eaque, atque? Vel quo voluptas
          sint illum distinctio dolore laboriosam dolorem at. Maiores fugiat
          sint asperiores voluptatum consequatur quae, labore quam? Dolorum
          odit provident quos odio delectus?
        </p>

        {/* Button */}
        <button className="rounded-full px-5 py-3 sm:px-6 sm:py-4 text-black font-bold bg-blue-400 border-2 border-blue-500 hover:bg-[#00283C] hover:border-2 hover:border-white hover:text-white">
          Lorem, ipsum dolor.
        </button>

        {/* Image */}
        <img
          className="mt-8 sm:mt-10 w-full sm:w-[600px] h-auto object-cover rounded-lg"
          src={aboutImg}
          alt="About Us"
        />
      </div>
    </div>
  );
};

export default AboutUs;
