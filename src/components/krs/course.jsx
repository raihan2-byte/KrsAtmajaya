import React, { useState } from "react";
import ExpandKrs from "../../assets/expand-krs.png";
import ExpandHideDetails from "../../assets/expand-hidedetails.png";

const Course = ({ courses, semester }) => {
  const [showCourses, setShowCourses] = useState(false);

  return (
    <div className="text-[12px]">
      <div className="flex bg-[#D9D9D9] justify-between text-[12px] text-[#000000] font-bold">
        <div className="px-8">INDUSTRIAL ENGINEERING - SEMESTER {semester}</div>
      </div>
      <div className="dropdown w-full">
        <div className="flex justify-between items-center pl-8 pr-2 ">
          <div className="flex items-center gap-2">
            <button
              className="text-black font-semibold py-1 items-center "
              onClick={() => {
                setShowCourses(!showCourses);
              }}
            >
              <div>
                <img src={ExpandKrs} alt="" />
              </div>
            </button>
            <div className="">CORE COURSES</div>
          </div>
          <div className="flex gap-3 text-[#1D518D] border-[1px] border-[#1D518D] font-bold px-1 items-center">
            <div className="">HIDE DETAILS</div>
            <div>
              <img src={ExpandHideDetails} alt="" />
            </div>
          </div>
        </div>

        <ul
          className={`dropdown-menu ${showCourses ? "block" : "hidden"} bg-white text-black-700 `}
        >
          <li className="flex justify-between items-center w-full"></li>
          <div className="px-8 my-2">
            <table className="border-[#888888] w-[90%] ">
              <thead className="border-[1px] border-black">
                <tr className="text-left font-bold ">
                  <th className="border-[1px] border-[#888888] pl-2">Course Code</th>
                  <th className="border-[1px] border-[#888888] pl-2">Description</th>
                  <th className="border-[1px] border-[#888888] pl-2">Units</th>
                  <th className="border-[1px] border-[#888888] pl-2">When</th>
                  <th className="border-[1px] border-[#888888] pl-2 text-center">Day</th>
                  <th className="border-[1px] border-[#888888] pl-2 text-center">Room</th>
                  <th className="border-[1px] border-[#888888] pl-2 text-center">Instructor</th>
                  <th className="border-[1px] border-[#888888] pl-2">Grade</th>
                </tr>
              </thead>
              <tbody className="border-[1px] border-[#888888] text-[12px]">
                {courses.map((item, index) => (
                  <tr key={index} className="border-[1px] border-[#888888]">
                    <td className="border-[1px] border-[#888888] pl-2">
                      <div className="flex gap-2 items-center">
                        <div>
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 flex items-center text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>
                        <div>{item.CourseCode}</div>
                      </div>
                    </td>
                    <td className="border-[1px] border-[#888888] pl-2">{item.Description}</td>
                    <td className="border-[1px] border-[#888888] pl-2">{item.Units}</td>
                    <td className="border-[1px] border-[#888888] pl-2">{item.When}</td>
                    <td className="border-[1px] border-[#888888] pl-2">{item.Day}</td>
                    <td className="border-[1px] border-[#888888] pl-2">{item.Room}</td>
                    <td className="border-[1px] border-[#888888] pl-2">{item.Instructor}</td>
                    <td className="border-[1px] border-[#888888] pl-2">{item.Grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Course;
