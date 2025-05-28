import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function Nav() {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="flex justify-between p-2 relative shadow">
        <img src="dev-vin.png" alt="" className="h-14"/>

        <img src={showOptions? "cancel-svgrepo-com.svg":"burger-menu-svgrepo-com.svg"} alt="" className="h-12" onClick={toggleOptions}/>
      </div>

      {showOptions&& 
        <div className="text-2xl absolute w-full md:hidden backdrop-blur-sm px-6 text-orange-500 bg-white shadow">
            <div className="py-2 font-serif">Home</div>
            <div className="py-2 font-serif">Projects</div>
            <div className="py-2 font-serif">About</div>
            <div className="py-2 font-serif">Contact</div>
            {/* <div className="py-2 font-serif">Resume</div> */}
            <div className="py-2 font-serif">Blog</div>
          </div>
        }
        <Outlet/>
    </nav>
  );
}