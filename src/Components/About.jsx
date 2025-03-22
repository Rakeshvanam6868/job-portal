import aboutImg from "../assets/ease_img.jpg";

const About = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row pl-5 lg:pl-20 pt-10 lg:pt-20 pb-10 lg:pb-16">
      {/* Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-16">
        <div className="flex flex-col gap-3 lg:gap-5">
          <p className="text-2xl lg:text-4xl font-bold">lorem. lorem. lorem. lorem.</p>
          <p className="text-xl lg:text-4xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, reprehenderit!
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-lg lg:text-xl font-bold">Lorem ipsum dolor sit.</p>
          <p className="text-[#00283C] text-wrap pr-0 lg:pr-10 text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptas eum soluta sint atque voluptatibus, hic esse assumenda iste odit illum expedita optio nihil vel! Dolore pariatur officiis dignissimos eum?
          </p>
        </div>
        <button className="bg-blue-700 w-32 h-12 lg:w-40 lg:h-16 rounded-md text-white font-bold">
          Learn More
        </button>
      </div>

      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0">
        <img
          className="rounded-full w-64 h-64 lg:w-96 lg:h-96 object-cover"
          src={aboutImg}
          alt="About Us"
        />
      </div>
    </div>
  );
};

export default About;