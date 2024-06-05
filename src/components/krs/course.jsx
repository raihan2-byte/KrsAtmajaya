import React, { useEffect, useState } from "react";
import ExpandKrs from "../../assets/expand-krs.png";
import ExpandHideDetails from "../../assets/expand-hidedetails.png";

const Course = ({ courses, semester, selectedCourse, setSelectedCourse }) => {
  const [showCourses, setShowCourses] = useState(false);

  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      const checkedCourse = courses.find((item) => item.CourseCode == value);
      //console.log(checkedCourse)
      setSelectedCourse((prev) => [...prev, checkedCourse]);
    } else {
      setSelectedCourse((prev) =>
        prev.filter((val) => val.CourseCode != value)
      );
    }
  };

  useEffect(() => {
    const coursesData = localStorage.getItem("selectedCourse1");
    console.log(JSON.parse(coursesData));
    console.log(typeof coursesData);
    if (coursesData?.length > 0) {
      setSelectedCourse(JSON.parse(coursesData));
    } else {
      setSelectedCourse([]);
    }
  }, []);

  console.log(selectedCourse);

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
          className={`dropdown-menu ${
            showCourses ? "hidden" : "block"
          } bg-white text-black-700 `}
        >
          <li className="flex justify-between items-center w-full"></li>
          <div className="px-8 my-2">
            <table className="border-[#888888] w-full ">
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
              <tbody className="border-[1px] border-[#888888] text-[12px]">
                {courses.map((item, index) => (
                  <tr key={index} className="border-[1px] border-[#888888]">
                    <td className="border-[1px] border-[#888888] pl-2">
                      <div className="flex gap-2 items-center">
                        <div>
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value={item.CourseCode}
                            checked={
                              selectedCourse?.find(
                                (value) => value.CourseCode == item.CourseCode
                              )
                                ? true
                                : false
                            }
                            onChange={handleChange}
                            className="w-4 h-4 flex items-center text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>
                        <div>{item.CourseCode}</div>
                      </div>
                    </td>
                    <a
                      href="/course"
                      className="text-blue-500"
                      onClick={() =>
                        localStorage.setItem(
                          "selectedCourse2",
                          JSON.stringify(item)
                        )
                      }
                    >
                      <td className="border-[1px] border-[#888888] pl-2">
                        {item.Description}
                      </td>
                    </a>
                    <td className="border-[1px] border-[#888888] pl-2">
                      {item.Units}
                    </td>
                    <td className="border-[1px] border-[#888888] pl-2">
                      {item.When}
                    </td>
                    <td className="border-[1px] border-[#888888] pl-2">
                      {item.Date}
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
              </tbody>
            </table>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Course;
