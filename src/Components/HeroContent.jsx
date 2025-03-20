import { heroData } from "../utils/heroData";

const HeroContent = ()=>{
    return(
        <>  <div className="flex gap-14 items-center justify-center px-20 py-40">
           { heroData.map((data)=>(
             <div key={data.id} className="flex text-white flex-col gap-10 justify-center items-center text-center px-2">
                  <i className="text-5xl font-light">{data.icon}</i>
                  <h1 className="font-bold text-xl">{data.title}</h1>
                  <p className="font-semibold text-base">{data.subTitle}</p>
                  <button className="border-2 border-white font-bold px-8 py-4 hover:bg-white rounded-full hover:text-[#00283C]">{data.button}</button>
               </div>
           )
           )}      
            </div>
        </>
    );
}

export default HeroContent;