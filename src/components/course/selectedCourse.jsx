import React, { useEffect, useState } from "react";
import ExpandKrs from "../../assets/expand-krs.png";
import DeletecIcon from "../../assets/deleted-icon.png";

const selectedCourse = () => {
  const [selectedCourses, setSelectedCourses] = useState([]);

  useEffect(() => {
    const savedCourses = JSON.parse(localStorage.getItem("selectedCourses"));
    if (savedCourses) {
      setSelectedCourses(savedCourses);
    }
  }, []);

  const handleRemoveCourse = (course) => {
    const updatedCourses = selectedCourses.filter(
      (item) => item.CourseCode !== course.CourseCode
    );
    setSelectedCourses(updatedCourses);
    localStorage.setItem("selectedCourses", JSON.stringify(updatedCourses));
  };

  return (
    <div>
      <div className="dropdown w-full">
        <div className="flex justify-between items-center pl-8 pr-2 ">
          <div className="flex items-center gap-2">
            <button
              className="text-black font-semibold py-1 items-center "
              onClick={() => {
                setSelectedCourses(!selectedCourses);
              }}
            >
              <div>
                <img src={ExpandKrs} alt="" />
              </div>
            </button>
            <div className="">CORE COURSES</div>
          </div>
        </div>

        <ul className={`dropdown-menu ${selectedCourses ? "block" : "hidden"} bg-white text-black-700`}>
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
                {selectedCourses.map((item, index) => (
                  <tr key={index} className="border-[1px] border-[#888888]">
                    <td className="border-[1px] border-[#888888] pl-2">
                      <div className="flex gap-2 items-center">
                        <div>
                          <img src={DeletecIcon} alt="" onClick={() => handleRemoveCourse(item)} />
                        </div>
                        <div>{item.CourseCode}</div>
                      </div>
                    </td>
                    <td className="border-[1px] border-[#888888] pl-2">{item.Description}</td>
                    <td className="border-[1px] border-[#888888] pl-2">{item.Units}</td>
                    <td className="border-[1px] border-[#888888] pl-2">{item.When}</td>
                    <td className="border-[1px] border-[#888888] pl-2 text-center">{item.Day}</td>
                    <td className="border-[1px] border-[#888888] pl-2 text-center">{item.Room}</td>
                    <td className="border-[1px] border-[#888888] pl-2 text-center">{item.Instructor}</td>
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

export default selectedCourse;
