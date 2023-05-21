import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";


const Main = () => {
    return (
        <div className="max-w-[1600px] mx-auto min-h-screen flex flex-col">
            <Header></Header>
            <Outlet></Outlet>
        <div className="mt-auto">
            <Footer></Footer>
        </div>
        </div>
    );
};

export default Main;