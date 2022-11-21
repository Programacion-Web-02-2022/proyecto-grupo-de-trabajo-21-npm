import React from "react";
import Anchors from "./Anchors/Anchors";
import Logo from "../../assets/logo.png";

const LoggedNavbar = () => {
  return (
    <header className="bg-backblue items-center justify-between p-2 header flex flex-1 flew-row flex-no-wrap sticky top-0">
      <img src={Logo} className="max-h-20 lg:h-10" />
      <div className=" justify-items-end flex items-center flex-1 flex-row-reverse flex-no-wrap gap-5 p-2"> 
    
      <Anchors />
      
      </div>
    </header>
  );
};

export default LoggedNavbar;
