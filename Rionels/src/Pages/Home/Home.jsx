import cover from "../../../src/assets/Rionel/vector/isolated-monochrome-black.svg";
import bgVideo from "../../assets/bg-video.mp4";

const Home = () => {
  return (
    <div>
      <div className="text-secondary text-center absolute mt-64 px-16 z-20 left-0 right-0 top-0">
        <h1 className="text-5xl">Largest Game Shop in BD</h1>
        <h2 className="text-3xl my-6">JOIN THE HYPE!!!</h2>
        <button className="btn btn-secondary btn-circle text-xl w-28">Join</button>
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

      <img className="my-24 px-12" src={cover} alt="" />


    </div>
  );
};

export default Home;
