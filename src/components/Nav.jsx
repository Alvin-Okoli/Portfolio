import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function Nav({scrollToHome, scrollToProjects, scrollToAbout, scrollToContact}) {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="flex justify-between py-2 md:px-6 lg:px-24 relative">
        <img src="dev-vin.png" alt="" className="h-14"/>

        <img src={showOptions? "cancel-svgrepo-com.svg":"burger-menu-svgrepo-com.svg"} alt="" className="h-12 md:hidden" onClick={toggleOptions}/>

        <div className="hidden pt-3 gap-10 mx-auto text-lg md:flex md:absolute right-16 lg:right-36">
          <div className="py-2 font-bold cursor-pointer" onClick={scrollToHome}>Home</div>
          <div className="py-2 font-bold cursor-pointer" onClick={scrollToProjects}>Projects</div>
          <div className="py-2 font-bold cursor-pointer" onClick={scrollToAbout}>About</div>
          <div className="py-2 font-bold cursor-pointer" onClick={scrollToContact}>Contact</div>
          <div className="py-2 font-bold cursor-pointer">Blog</div>
        </div>
      </div>

      {showOptions&& 
        <div className="text-2xl absolute w-full md:hidden backdrop-blur-sm px-6 text-orange-500 bg-white shadow">
            <div className="py-2 font-bold" onClick={scrollToHome}>Home</div>
            <div className="py-2 font-bold" onClick={scrollToProjects}>Projects</div>
            <div className="py-2 font-bold" onClick={scrollToAbout}>About</div>
            <div className="py-2 font-bold" onClick={scrollToContact}>Contact</div>
            <div className="py-2 font-bold">Blog</div>
          </div>
        }
        <Outlet/>
    </nav>
  );
}