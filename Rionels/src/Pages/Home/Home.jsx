import { useLoaderData } from "react-router-dom";
import cover from "../../../src/assets/Rionel/vector/isolated-monochrome-black.svg";
import bgVideo from "../../assets/bg-video.mp4";
import useTitle from "../../hooks/useTitle";
import Gallery from "./Gallery/Gallery";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import Contact from "./Contact/Contact";

const Home = () => {

  const toys = useLoaderData()

  useTitle('Home')

  return (
    <div>
      <div className="text-secondary text-center absolute z-20 left-0 right-0 top-0 mt-28 md:mt-64 px-16">
        <h1 className="text-xl md:text-5xl">Largest Game Shop in BD</h1>
        <h2 className="text-xl md:text-3xl md:my-6">JOIN THE HYPE!!!</h2>
        <button className="btn btn-secondary btn-circle md:text-xl md:w-28">Join</button>
      </div>
      <div>
        <video
          src={bgVideo} style={{filter:'brightness(40%)'}}
          className="max-h-[600px] w-full object-cover"
          autoPlay
          loop
          muted
        ></video>
      </div>

      <Gallery></Gallery>

      <img className="my-24 px-12" src={cover} alt="" data-aos="fade-left"/>

      <ShopByCategory toys={toys}></ShopByCategory>

      <Contact></Contact>

    </div>
  );
};

export default Home;
