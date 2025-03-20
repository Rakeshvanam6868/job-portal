import aboutImage from "../assets/aboutImage.jpg";
const OurStory = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col pt-40 gap-8 ">
        <div className="">
          <p className="text-4xl font-bold text-[#00283C]">Our Story</p>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center w-full">
          <p className="text-center w-[800px] text-base text-[#00283C]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quas,
            fugiat laboriosam maiores dolore, repellat, ducimus recusandae
            repellendus dolor aut rem. Vel pariatur, illo sit molestiae, ullam
            quisquam atque incidunt numquam delectus suscipit quae!
            Reprehenderit quas.
          </p>
          <p className="text-center w-[800px] text-base text-[#00283C]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            cupiditate? Perferendis fugit blanditiis cumque! Perferendis iusto
            tempora officia cum error!
          </p>
        </div>
      </div>

      <div className="pt-40">
        <img
          className="rounded-lg "
          src={aboutImage}
          width={1536}
          height={800}
          alt=""
        />
      </div>
    </>
  );
};

export default OurStory;
