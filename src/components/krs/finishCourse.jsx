import React, { useState } from "react";
import ExpandKrs from "../../assets/expand-krs.png";
import Course from "../krs/course";
import DeletecIcon from "../../assets/deleted-icon.png";

const CourseSem1 = [
  {
    CourseCode: "TIN 101",
    Description: "MATEMATIKA DASAR",
    Units: "2",
    When: "ODD",
    Day: "Mon 10.00-12.00 WIB",
    Room: "Dormitory 1 BSD",
    Instructor: "Trifenaus Prabu Hidayat, S.T., M.T.",
    Grade: "",
  },
  {
    CourseCode: "TIN 102",
    Description: "Bahasa Indonesia",
    Units: "2",
    When: "ODD",
    Day: "Tues 10.00-12.00 WIB",
    Room: "AG 101 BSD",
    Instructor: "Andre Sugioko, S.T.,M.T.",
    Grade: "",
  },
  {
    CourseCode: "TIN 103",
    Description: "Bahasa Inggris",
    Units: "2",
    When: "ODD",
    Day: "Wed 10.00-12.00 WIB",
    Room: "A 1102 BSD",
    Instructor: "Hotma Antoni Hutahaean, S.T., M.T., IPM",
    Grade: "",
  },
  {
    CourseCode: "TIN 104",
    Description: "Kimia Dasar",
    Units: "2",
    When: "ODD",
    Day: "Fri 10.00-12.00 WIB",
    Room: "Dormitory 3 SMG",
    Instructor: "Ronald Sukwadi, Ph.D., IPM",
    Grade: "",
  },
];


const finishCourse = () => {
  const [SelectedCourse, setSelectedCourse] = useState(false);

  return (
    <div>
      <div className="dropdown w-full">
        <div className="flex justify-between items-center pl-8 pr-2 ">
          <div className="flex items-center gap-2">
            <button
              className="text-black font-semibold py-1 items-center "
              onClick={() => {
                setSelectedCourse(!SelectedCourse);
              }}
            >
              <div>
                <img src={ExpandKrs} alt="" />
              </div>
            </button>
            <div className="">CORE COURSES</div>
          </div>
        </div>

        <ul
          className={`dropdown-menu  ${
            SelectedCourse ? "hidden" : "block"
          } bg-white text-black-700 `}
        >
          <li className="flex justify-between items-center w-full"></li>
          <div className="px-8 my-2">
            <table className="border-[#888888] w-[90%] ">
              <thead className="border-[1px] border-black">
                <tr className="text-left font-bold ">
                  <th className="border-[1px] border-[#888888] pl-2">
                    Course Code
                  </th>
                  <th className="border-[1px] border-[#888888] pl-2">
                    Description
                  </th>
                  <th className="border-[1px] border-[#888888] pl-2">Units</th>
                  <th className="border-[1px] border-[#888888] pl-2">When</th>
                  <th className="border-[1px] border-[#888888] pl-2 text-center">
                    Day
                  </th>
                  <th className="border-[1px] border-[#888888] pl-2 text-center">
                    Room
                  </th>
                  <th className="border-[1px] border-[#888888] pl-2 text-center">
                    Instructor
                  </th>
                  <th className="border-[1px] border-[#888888] pl-2">Grade</th>
                </tr>
              </thead>
              <tbody className=" text-[12px]">
                {CourseSem1.map((item, index) => (
                  <tr className="border-[1px] border-[#888888]">
                    <td className="border-[1px] border-[#888888] pl-2">
                      <div className="flex gap-2 items-center">
                        <div>{item.CourseCode}</div>
                      </div>
                    </td>
                    <td className="border-[1px] border-[#888888] pl-2">
                      {item.Description}
                    </td>
                    <td className="border-[1px] border-[#888888] pl-2">
                      {item.Units}
                    </td>
                    <td className="border-[1px] border-[#888888] pl-2">
                      {item.When}
                    </td>
                    <td className="border-[1px] border-[#888888] pl-2">
                      {item.Day}
                    </td>
                    <td className="border-[1px] border-[#888888] pl-2">
                      {item.Room}
                    </td>
                    <td className="border-[1px] border-[#888888] pl-2">
                      {item.Instructor}
                    </td>
                    <td className="border-[1px] border-[#888888] pl-2">
                      {item.Grade}
                    </td>
                  </tr>
                ))}
                <tr>
                    <td colSpan={2} className="border-[1px] border-[#888888] pl-2 font-bold">TOTAL SELECTED UNITS</td>
                    <td className="border-[1px] border-[#888888] pl-2">8</td>
                    {/* <td className="">s</td>
                    <td className="">s</td>
                    <td className="">s</td>
                    <td className="">s</td>
                    <td className="">s</td> */}
                    
                </tr>
              </tbody>
            
            </table>
          </div>
          <div className="flex justify-end w-[87.5%] gap-8 items-center">
            <div>
              <button className=" bg-[#BBD9FB] flex items-center text-center justify-center   w-[98px] h-[21px] border-[1px] border-black font-bold">
                BACK
              </button>
            </div>
            <div>
              <button className="bg-[#FDEDB4] flex items-center text-center justify-center   w-[98px] h-[21px] border-[1px] border-black font-bold text-[9px]">
              FINISH ENROLLMENT
              </button>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default finishCourse;
