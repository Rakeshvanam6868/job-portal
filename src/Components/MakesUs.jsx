import aboutImage from "../assets/makes1.jpg";

const MakesUs = () => {
  return (
    <div className="bg-[#FFFAE1] pt-20 pl-4 sm:pl-20 pb-20">
      {/* Title */}
      <div className="flex flex-col items-start justify-center gap-4 sm:gap-6">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">What Makes Us, Us</p>
        <p className="text-sm sm:text-base lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          exercitationem nam consectetur? Doloribus autem id quidem deleniti
          possimus nobis ratione.
        </p>
      </div>

      {/* Image and Text Sections */}
      {[1, 2, 3, 4].map((index) => (
        <div
          key={index}
          className={`flex flex-col sm:flex-row ${
            index % 2 === 0 ? "sm:flex-row-reverse" : ""
          } gap-8 sm:gap-12 pt-12 sm:pt-20`}
        >
          {/* Image */}
          <div className="w-full -ml-5 flex justify-center items-center sm:w-1/2">
            <img
              className="w-[500px] h-[500px] object-cover rounded-lg"
              src={aboutImage}
              alt={`Section ${index}`}
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-4 sm:gap-6 justify-center items-start w-full sm:w-1/2">
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold">Lorem, ipsum.</p>
            <p className="text-sm sm:text-base lg:text-lg text-[#00283C] pr-0 sm:pr-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              blanditiis unde fugiat impedit dolores dicta accusamus. Voluptate,
              quae. Vitae veniam, ut a porro quo et at itaque error repellat
              odit harum ullam expedita, distinctio earum explicabo inventore
              eligendi veritatis cupiditate aut dolores autem. Distinctio eius,
              quam sequi fugit sapiente magni!
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MakesUs;
