import About from "../Components/About";
import Hero from "../Components/Hero";
export default function Home() {
  return (
    <>
      <div className="lg:w-full sm:w-full">
      <Hero/>
      <About/>
      </div>
    </>
  );
}
