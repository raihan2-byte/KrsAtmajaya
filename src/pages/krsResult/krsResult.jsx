import React, { useState } from "react";
import KrsResult from "../../components/krs/krsResult";
import Sidebar from "../../components/sidebar/sidebars";
import HeaderKrs from "../../components/headerKrs";
import ExpandCourses from "../../assets/expand-krs.png";
import DeletedIcon from "../../assets/deleted-icon.png";
import SelectedCourse from "../../components/krs/selectedCourse"
// import SelectedCourse from "../../components/krs/course"



const krsResult = () => {
  const [OpenAllCourses, setOpenAllCourses] = useState(false);

  return (
    <div className="h-full flex">
      <Sidebar />
      <div className="w-full">
        <KrsResult />
        <HeaderKrs />
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
              <div className="w-full">

              <div className="flex items-center px-10 py-2 justify-between w-full">
                <div className="flex items-center flex-col ">
                  <div className="flex items-center">
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
                    </label>
                  </div>
                  <div className="flex items-center">
                    <img src={DeletedIcon} alt="" className="w-[10px]"/>

                    <label
                      for="default-checkbox"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Select All
                    </label>
                  </div>
                </div>

                <div className="text-[#1D518D] font-bold text-[20px]">
                  Total Selected Units = 24
                </div>
              </div>
              <SelectedCourse/>

              </div>
              
            </li>
            {/* <li className="justify-between items-center w-full">
            <SelectedCourse/>

            </li> */}
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default krsResult;
