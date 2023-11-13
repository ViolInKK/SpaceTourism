import { useState } from "react";
import { menu, close, logo } from "../assets";

const Navbar = () => {
  const [isSideBar, setIsSideBar] = useState(false);

  return (
    <div className="w-[90%] h-[100px] ml-auto pt-[40px] flex items-center justify-between sm:mr-auto">
      <img src={logo}></img>
      <div className="h-[1px] bg-[#979797]/30 w-[40%] relative left-[2%] z-10 md:hidden sm:hidden"></div>
      <img src={isSideBar ? close : menu} className="hidden sm:inline cursor-pointer z-10" onClick={() => setIsSideBar(!isSideBar)}></img>
      <div
        className={`w-[65%] p-7 backdrop-blur-xl bg-white/5 flex gap-2 items-center justify-around text-[1.5rem] md:text-[0.9rem] sm:${
          isSideBar ? "visible" : "hidden"
        } sm:fixed sm:flex-col sm:top-0 sm:bottom-0 sm:right-0 sm:left-[40%] sm:justify-start sm:items-start sm:py-[10rem]`}
      >
        <div className="flex gap-2 cursor-pointer">
          <span className="md:hidden">00</span>
          <a>HOME</a>
        </div>
        <div className="flex gap-2 cursor-pointer">
          <span className="md:hidden">01</span>
          <a>DESTINATION</a>
        </div>
        <div className="flex gap-2 cursor-pointer">
          <span className="md:hidden">02</span>
          <a>CREW</a>
        </div>
        <div className="flex gap-2 cursor-pointer">
          <span className="md:hidden">03</span>
          <a>TECHNOLOGY</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
