import { Link } from "react-router-dom";
import bgVideo from "../../assets/error.mp4";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <video
        src={bgVideo}
        className="w-1/2 my-12 mx-auto object-cover"
        autoPlay
        loop
        muted
      ></video>
      <Link to='/'><button className="btn btn-secondary btn-circle md:text-xl md:w-28">To Home</button></Link>
    </div>
  );
};

export default ErrorPage;
