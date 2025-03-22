import MakesUs from "../Components/MakesUs";
import AboutUs from "../Components/AboutUs";
import OurStory from "../Components/OurStory";


const AboutPage=()=>{
    return(
        <>
           <div className="overflow-hidden">
               <AboutUs/>
               <OurStory/>
               <MakesUs/>
           </div>
        </>
    );
}

export default AboutPage;