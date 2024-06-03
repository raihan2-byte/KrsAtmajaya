import React, { useState } from 'react'
import Sidebar from "../sidebar/sidebars"
import Header from "../../components/header/header"
import KrsResult from "../../components/krs/krsResult"
import HeaderKrs from "../../components/headerKrs"
import ExpandCourses from "../../assets/expand-krs.png"
import FinishCourses from "./finishCourse"


const krsFinish = () => {
    const [FinishCourse, setFinishCourse] = useState(false);

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
                    setFinishCourse(!FinishCourse);
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
                FinishCourse ? "block" : "hidden"
            } bg-white text-black-700 `}
          >
            <li className="flex justify-between items-center w-full">
              <div className="w-full">

              
              <FinishCourses/>

              </div>
              
            </li>
            {/* <li className="justify-between items-center w-full">
            <SelectedCourse/>

            </li> */}
          </ul>
        </div>
        </div>
    </div>
  )
}

export default krsFinish