import React, { useState } from "react";
import Expand from "../../assets/expand.png"

const SidebarItem = ({ items }) => {
  const [open, setOpen] = useState(false);
  console.log("items", items);

  if (items.childrens) {
    return (
      
      <div className="w-full hover:bg-[#e3c187cc] hover:text-[#000] px-2 py-2">
        
        <div
          onClick={() => setOpen(!open)}
          className="flex gap-3 items-center px-2"
        >
          <span>
            <span className="">{items.icon}</span> {items.title}
          </span>
          <span
            className={
              open
                ? ""
                : "cursor-pointer transition-all"
            }
          >
            <img src={Expand} alt="" />
          </span>
        </div>
        <div
          className={open ? "h-auto overflow-hidden pl-2" : "h-0 overflow-hidden"}
        >
          {items.childrens.map((child, index) => (
            <SidebarItem key={index} items={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full hover:bg-[#e3c187cc] hover:text-[#000] px-2 py-2">
        <div className="flex justify-between items-center px-2">
          <span>
            <span>{items.icon}</span> {items.title}
          </span>
        </div>
      </div>
    );
  }
};

export default SidebarItem;
