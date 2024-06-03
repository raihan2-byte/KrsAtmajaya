import React, { useState } from "react";
import { Link } from "react-router-dom";
import Expand from "../../assets/expand.png";

const SidebarItem = ({ items }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  if (items.childrens) {
    return (
      <div className="w-full hover:bg-[#e3c187cc] hover:text-[#000] px-2 py-2">
        <div onClick={handleToggle} className="flex gap-3 items-center px-2 cursor-pointer">
          <span className="flex gap-2 items-center">
            <img src={items.icon} alt={items.title} /> {items.title}
          </span>
          <span className={open ? " transition-all" : "transition-all"}>
            <img src={Expand} alt="expand icon" />
          </span>
        </div>
        <div className={open ? "h-0 overflow-hidden" : " h-auto overflow-hidden pl-2"}>
          {items.childrens.map((child, index) => (
            <SidebarItem key={index} items={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full hover:bg-[#e3c187cc] hover:text-[#000] px-2 py-2">
        <Link to={items.path} className="flex justify-between items-center px-2">
          <span className="flex items-center gap-2">
            <img src={items.icon} alt={items.title} /> {items.title}
          </span>
        </Link>
      </div>
    );
  }
};

export default SidebarItem;
