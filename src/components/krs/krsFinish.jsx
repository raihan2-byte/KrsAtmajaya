import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/sidebars";
import HeaderKrs from "../../components/headerKrs";
import ExpandCourses from "../../assets/expand-krs.png";
import KrsResult from "../../components/krs/krsResult"
// import HeaderKrs from "../../components/headerKrs"
// import FinishCourses from "./finishCourse";

const KrsFinish = () => {
  const [finishCourse, setFinishCourse] = useState(false);
  const [myCourses, setMyCourses] = useState([]);
  const [totalUnits, setTotalUnits] = useState(0);

  useEffect(() => {
    const coursesData = JSON.parse(localStorage.getItem("selectedCourse1"));
    const totalUnitsData = parseInt(localStorage.getItem("totalUnits"), 10);

    console.log("Retrieved courses data:", coursesData);
    console.log("Retrieved total units:", totalUnitsData);

    if (coursesData) {
      setMyCourses(coursesData);
      setTotalUnits(totalUnitsData);
    }
  }, []);

  return (
    <div className="h-full flex">
      <Sidebar />
      <div className="w-full">
      <KrsResult />
        <HeaderKrs />
        <div className="dropdown w-full">
          <div className="flex py-2 pl-4 items-center bg-[#D9D9D9] justify-between text-[12px] text-[#000000] font-bold">
            <div className="flex items-center gap-3 ">
              <button
                className="text-black font-semibold py-1 items-center"
                onClick={() => setFinishCourse(!finishCourse)}
              >
                <div>
                  <img src={ExpandCourses} alt="Expand" />
                </div>
              </button>
              <div>S1 - INDUSTRIAL ENGINEERING</div>
            </div>
            <div className="px-2">Not Satisfied</div>
          </div>
          <ul className={`dropdown-menu ${finishCourse ? "hidden" : "block"} bg-white text-black-700`}>
            <li className="flex justify-between items-center w-full">
              <div className="w-full">
                <FinishCourses myCourses={myCourses} totalUnits={totalUnits} />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const FinishCourses = ({ myCourses, totalUnits }) => {
  return (
    <div className="px-8 my-2">
      <table className="border-[#888888] w-[90%]">
        <thead className="border-[1px] border-black">
          <tr className="text-left font-bold">
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
        <tbody className=" text-[12px]">
          {myCourses.map((course) => (
            <tr key={course.CourseCode} className="border-[1px] border-[#888888]">
              <td className="border-[1px] border-[#888888] pl-2">{course.CourseCode}</td>
              <td className="border-[1px] border-[#888888] pl-2">{course.Description}</td>
              <td className="border-[1px] border-[#888888] pl-2">{course.Units}</td>
              <td className="border-[1px] border-[#888888] pl-2">{course.When}</td>
              <td className="border-[1px] border-[#888888] pl-2">{course.Day}</td>
              <td className="border-[1px] border-[#888888] pl-2">{course.Room}</td>
              <td className="border-[1px] border-[#888888] pl-2">{course.Instructor}</td>
              <td className="border-[1px] border-[#888888] pl-2">{course.Grade}</td>
            </tr>
          ))}
           <tr className="bg-[#BBD9FB] font-bold">
                    <td colSpan={2} className="border-[1px] border-[#888888] pl-2 font-bold">TOTAL SELECTED UNITS</td>
                    <td className="border-[1px] border-[#888888] pl-2 font-bold">{totalUnits}</td>
                </tr>
        </tbody>
      </table>
      <div className="flex justify-end w-[90%] gap-8 items-center mt-3">
            <div>
              <a href="/krs-result">
              <button className=" bg-[#BBD9FB] flex items-center text-center justify-center   w-[98px] h-[21px] border-[1px] border-black font-bold">
                BACK
              </button>
              </a>
            </div>
            <div>
              <a href="/">
              <button className="bg-[#FDEDB4] flex items-center text-center justify-center   w-[98px] h-[21px] border-[1px] border-black font-bold text-[9px]">
              FINISH ENROLLMENT
              </button>
              </a>
            </div>
          </div>
    </div>
  );
};

export default KrsFinish;
