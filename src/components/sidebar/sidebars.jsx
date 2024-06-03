import React from "react";
import SidebarItem from "./sidebarItem";
import MENU from "../../constants/menu";
import LogoAtmajaya from "../../assets/logo.png"


const Sidebars = () => {
  return (
    <div className="w-[300px] bg-[#FFDAB4] text-[#000] h-full overflow-auto block text-[12px]">
      <div>
          <img src={LogoAtmajaya} alt="" className="w-[230px] m-auto p-1"/>
        </div>
      {MENU.map((items, index) => (

          <SidebarItem key={index} items={items} />
      ))}
    </div>
  );
};

export default Sidebars;
