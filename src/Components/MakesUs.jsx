import aboutImage from "../assets/makes1.jpg";
const MakesUs = () => {
  return (
    <>
      <div className="bg-[#FFFAE1] pt-20 pl-20 pb-40">
        <div className="flex flex-col items-start justify-center  gap-5">
          <p className="text-4xl font-bold">What Makes Us, Us</p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            exercitationem nam consectetur? Doloribus autem id quidem deleniti
            possimus nobis ratione.
          </p>
        </div>
        
        {/* left Image */}
        <div className="flex pr-10 pt-20 gap-20">
          <div className="">
            <img
              className="rounded-lg "
              src={aboutImage}
              width={1600}
              height={500}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2 justify-center items-start">
            <p className="text-2xl font-bold">Lorem, ipsum.</p>
            <p className="text-[#00283C] text-lg pr-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              blanditiis unde fugiat impedit dolores dicta accusamus. Voluptate,
              quae. Vitae veniam, ut a porro quo et at itaque error repellat
              odit harum ullam expedita, distinctio earum explicabo inventore
              eligendi veritatis cupiditate aut dolores autem. Distinctio eius,
              quam sequi fugit sapiente magni!
            </p>
          </div>
        </div>

        {/* Right Image*/}
        <div className="flex pr-10 pt-20 gap-20">
          <div className="flex flex-col gap-2 justify-center items-start">
            <p className="text-2xl font-bold">Lorem, ipsum.</p>
            <p className="text-[#00283C] text-lg pr-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              blanditiis unde fugiat impedit dolores dicta accusamus. Voluptate,
              quae. Vitae veniam, ut a porro quo et at itaque error repellat
              odit harum ullam expedita, distinctio earum explicabo inventore
              eligendi veritatis cupiditate aut dolores autem. Distinctio eius,
              quam sequi fugit sapiente magni!
            </p>
          </div>
          <div className="">
            <img
              className="rounded-lg "
              src={aboutImage}
              width={1600}
              height={500}
              alt=""
            />
          </div>
        </div>

        {/* Left Image */}
        <div className="flex pr-10 pt-20 gap-20">
          <div className="">
            <img
              className="rounded-lg "
              src={aboutImage}
              width={1600}
              height={500}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2 justify-center items-start">
            <p className="text-2xl font-bold">Lorem, ipsum.</p>
            <p className="text-[#00283C] text-lg pr-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              blanditiis unde fugiat impedit dolores dicta accusamus. Voluptate,
              quae. Vitae veniam, ut a porro quo et at itaque error repellat
              odit harum ullam expedita, distinctio earum explicabo inventore
              eligendi veritatis cupiditate aut dolores autem. Distinctio eius,
              quam sequi fugit sapiente magni!
            </p>
          </div>
        </div>

        
        {/* Right Image*/}
        <div className="flex pr-10 pt-20 gap-20">
          <div className="flex flex-col gap-2 justify-center items-start">
            <p className="text-2xl font-bold">Lorem, ipsum.</p>
            <p className="text-[#00283C] text-lg pr-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              blanditiis unde fugiat impedit dolores dicta accusamus. Voluptate,
              quae. Vitae veniam, ut a porro quo et at itaque error repellat
              odit harum ullam expedita, distinctio earum explicabo inventore
              eligendi veritatis cupiditate aut dolores autem. Distinctio eius,
              quam sequi fugit sapiente magni!
            </p>
          </div>
          <div className="">
            <img
              className="rounded-lg "
              src={aboutImage}
              width={1600}
              height={500}
              alt=""
            />
          </div>
        </div>
        
      </div>
    </>
  );
};

export default MakesUs;
