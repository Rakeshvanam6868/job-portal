import aboutImg from "../assets/aboutRandomImage.png";
const AboutUs = () => {
  return (
    <>
      <div className="bg-[#00283C] w-full justify-center items-center flex flex-col gap-12 ">
        <p className="text-white text-center text-[14px] font-bold pt-28">
          ABOUT
        </p>
        <div className="flex flex-col text-white justify-center items-center gap-8">
          <p className="text-5xl w-[650px] text-center font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <p className="text-lg w-[750px] text-center font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quos
            necessitatibus rerum. Fuga atque omnis aliquam modi amet accusamus
            libero quibusdam molestias quaerat. Eaque, atque? Vel quo voluptas
            sint illum distinctio dolore laboriosam dolorem at. Maiores fugiat
            sint asperiores voluptatum consequatur quae, labore quam? Dolorum
            odit provident quos odio delectus?
          </p>
          <button className="rounded-full px-5 py-5 text-black font-bold bg-blue-400 border-2 border-blue-500 hover:bg-[#00283C] hover:border-2 hover:border-white hover:text-white">
            Lorem, ipsum dolor.
          </button>
          <img
            className="-mt-10 "
            src={aboutImg}
            width={600}
            height={500}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
