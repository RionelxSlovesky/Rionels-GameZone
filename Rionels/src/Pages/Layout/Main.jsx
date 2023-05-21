import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  return (
    <>
      <Header></Header>
      <div className="max-w-[1600px] mx-auto min-h-screen flex flex-col">
        <Outlet></Outlet>
      </div>
      <div className="mt-auto">
        <Footer></Footer>
      </div>
    </>
  );
};

export default Main;
