
import aboutImg from "../assets/ease_img.jpg"
const About = () => {
    return (
        <>
            <div className="w-full flex pl-20 pt-20 pb-16">
                <div className="w-1/2 flex flex-col gap-16">
                    <div className="flex flex-col gap-5">
                        <p className="text-4xl font-bold">lorem. lorem. lorem. lorem.</p>
                        <p className="text-4xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, reprehenderit!</p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <p className="text-xl font-bold">Lorem ipsum dolor sit.</p>
                        <p className="text-[#00283C] text-wrap pr-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptas eum soluta sint atque voluptatibus, hic esse assumenda iste odit illum expedita optio nihil vel! Dolore pariatur officiis dignissimos eum?</p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <p className="text-xl font-bold">Lorem ipsum dolor sit.</p>
                        <p className="text-[#00283C] text-wrap pr-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptas eum soluta sint atque voluptatibus, hic esse assumenda iste odit illum expedita optio nihil vel! Dolore pariatur officiis dignissimos eum?</p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <p className="text-xl font-bold">Lorem ipsum dolor sit.</p>
                        <p className="text-[#00283C] text-wrap pr-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptas eum soluta sint atque voluptatibus, hic esse assumenda iste odit illum expedita optio nihil vel! Dolore pariatur officiis dignissimos eum?</p>
                    </div>
                    
                    <button className="bg-blue-700 w-32 h-16 -mt-10 rounded-md text-white font-bold">Learn More</button>
                </div>
                <div className="w-1/2">
                    <div className="flex items-center justify-center pt-40">
                        <img
                            className="rounded-full "
                            src={aboutImg}
                            width={600}
                            height={900}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;