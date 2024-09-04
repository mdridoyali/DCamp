import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const MainLayOut = () => {
  return (
    <div className="">
       <Navbar></Navbar>
       
      <div className="">
         <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayOut;
