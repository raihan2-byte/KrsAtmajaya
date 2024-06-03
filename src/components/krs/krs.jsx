import React, { useState } from "react";
import Course from "./course";
import ExpandCourses from "../../assets/expand-krs.png";
import { IoIosAdd } from "react-icons/io";

import AddIcon from "../../assets/add.png"

const krs = () => {
  const [OpenAllCourses, setOpenAllCourses] = useState(false);

  return (
    <div className="w-full">
      <div className="dropdown w-full">
        <div className="flex py-2 pl-4 bg-[#D9D9D9] justify-between text-[12px] text-[#000000] font-bold">
          <div className="flex items-center gap-3 ">
            <button
              className="text-black font-semibold py-1 items-center "
              onClick={() => {
                setOpenAllCourses(!OpenAllCourses);
              }}
            >
              <div>
                <img src={ExpandCourses} alt="" />
              </div>
            </button>
            <div className="">S1 - INDUSTRIAL ENGINEERING</div>
          </div>
          <div className="px-2">Not Satisfied</div>
        </div>
        <ul
          className={`dropdown-menu  ${
            OpenAllCourses ? "block" : "hidden"
          } bg-white text-black-700 `}
        >
          <li className="flex justify-between items-center w-full">
            <div className="flex items-center px-10 py-2 justify-between w-full">
              <div className="flex items-center   ">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Select All
                  <div className="text-[#C42929] font-normal text-[12px]">
                    You can select all courses as a{" "}
                    <span className="font-bold">package</span>, with the maximum
                    credits based on your current GPA.
                  </div>
                </label>
              </div>
              <div className="text-[#1D518D] font-bold text-[20px]">
                Total Selected Units = 24
              </div>
            </div>
          </li>
          <li className=" justify-between items-center w-full">
            <Course />
          </li>
          <li className=" justify-between items-center w-full">
            <Course />
          </li>
          <li className=" justify-between items-center w-full">
            <Course />
          </li>
          <li className=" justify-between items-center w-full">
            <Course />
          </li>
        </ul>
      </div>
      <div className="flex gap-[4px] items-center justify-end mt-2">
        <div className="flex gap-[0.5px] items-center justify-end">
          <button className="bg-[#F8BD26] p-[5px] font-bold  text-[18px] border-[1px] border-black">
            <div className=""><IoIosAdd className=" text-black"/>
            </div>
          </button>
            <div className="bg-[#F8BD26] p-[5px] font-bold  text-[12px] border-[1px] border-black">ADD COURSE</div>
        </div>
        <button className="bg-[#D9D9D9] p-[5px] font-bold text-[12px] border-[1px] border-black">
          <div>Next</div>
        </button>
      </div>
    </div>
  );
};

export default krs;
