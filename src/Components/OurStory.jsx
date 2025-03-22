import aboutImage from "../assets/aboutImage.jpg";

const OurStory = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 pt-16">
      {/* Title */}
      <div>
        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00283C] text-center">
          Our Story
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-5 justify-center items-center w-full px-4 sm:px-0">
        <p className="text-sm sm:text-base lg:text-lg text-center text-[#00283C] w-full sm:w-[800px] lg:w-[900px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quas,
          fugiat laboriosam maiores dolore, repellat, ducimus recusandae
          repellendus dolor aut rem. Vel pariatur, illo sit molestiae, ullam
          quisquam atque incidunt numquam delectus suscipit quae!
          Reprehenderit quas.
        </p>
        <p className="text-sm sm:text-base lg:text-lg text-center text-[#00283C] w-full sm:w-[800px] lg:w-[900px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          cupiditate? Perferendis fugit blanditiis cumque! Perferendis iusto
          tempora officia cum error!
        </p>
      </div>

      {/* Image */}
      <div className="pt-8 sm:pt-16 w-full sm:w-[1536px] h-auto">
        <img
          className="w-full h-auto object-cover rounded-lg"
          src={aboutImage}
          alt="Our Story"
        />
      </div>
    </div>
  );
};

export default OurStory;