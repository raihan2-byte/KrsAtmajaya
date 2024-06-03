import React, { useState } from "react";
import Sidebar from "../sidebar/sidebars";
import KrsResult from "../../components/krs/krsResult";
import HeaderKrs from "../../components/headerKrs";
import ExpandKrs from "../../assets/expand-krs.png";
import { IoIosAdd } from "react-icons/io";

const course = () => {
  const [OpenCourse, setOpenCourse] = useState(false);
  const [openCourseDetail, setopenCourseDetail] = useState(false);
  const courses1 = JSON.parse(localStorage.getItem("selectedCourse1"));

  console.log(JSON.parse(localStorage.getItem("selectedCourse")));

  const CourseSem1 = [
    {
      Day: "Mon",
      Date: "1 Jan 2024 - 1 Jul 2024",
      Room: "Dormitory 1 BSD",
      Start: "10:00",
      End: "12:00",

      Instructor: "Trifenaus Prabu Hidayat, S.T., M.T.",
    },
  ];

  

  return (
    <div className="h-full flex">
      <Sidebar />
      <div className="w-full">
        <KrsResult />
        <HeaderKrs />
        <div>
          <div className="dropdown w-full">
            <div className="flex justify-between items-center px-4 bg-[#D9D9D9] w-full">
              <div className="flex items-center gap-2 ">
                <button
                  className="text-black font-semibold py-1 items-center "
                  onClick={() => {
                    setOpenCourse(!OpenCourse);
                  }}
                >
                  <div>
                    <img src={ExpandKrs} alt="" />
                  </div>
                </button>
                <div className="font-bold">S1 - INDUSTRIAL ENGINEERING</div>
              </div>
            </div>

            <ul
              className={`dropdown-menu  ${
                OpenCourse ? "block" : "hidden"
              } bg-white text-black-700 `}
            >
              <li className="flex justify-between items-center w-full">
                <div className="flex items-center px-4 py-2 justify-between w-full ">
                  <div className="text-[#1D518D] font-bold text-[20px]">
                    {courses1.CourseCode} - {courses1.Description}
                  </div>
                </div>
              </li>
              <li className="flex justify-between items-center w-full">
                <div className="dropdown w-full">
                  <div className="flex items-center px-4 py-2 gap-2 bg-[#D9D9D9] w-full">
                    <button
                      className="text-black font-semibold py-1 items-center "
                      onClick={() => {
                        setopenCourseDetail(!openCourseDetail);
                      }}
                    >
                      <div className="text-[#1D518D] font-bold text-[20px]">
                        <img src={ExpandKrs} alt="" />
                      </div>
                    </button>
                    <div className="font-bold">Course Detail</div>
                  </div>
                  <ul
                    className={`dropdown-menu  ${
                      openCourseDetail ? "hidden" : "block"
                    } bg-white text-black-700 `}
                  >
                    <li className="flex justify-between items-center w-full">
                      <div className=" items-center  py-2 justify-between w-full">
                        <div className="flex justify-between w-[60%] px-8">
                          <div className="font-bold text-black">
                            <div className="text-[#1D518D] font-bold text-[20px]">
                              Career
                            </div>
                            <div>Units</div>
                            <div>Graduating Basis</div>
                            <div>Course Component</div>
                            <div>Campus</div>
                            <div>Academic Group </div>
                            <div>Faculty</div>
                          </div>
                          <div>
                            <div>Undergraduate</div>

                            <div>{courses1.Units}</div>
                            <div>Passing C Normal</div>
                            <div>Lecture Required</div>
                            <div>BSD Campus</div>
                            <div>Engineering </div>
                            <div>Engineering</div>
                          </div>
                        </div>
                        <div className="bg-[#D9D9D9] px-8">
                          <div className=" w-full">Enrollment Information</div>
                        </div>
                        <div className="flex justify-between w-[55%] ">
                          <div className="font-bold px-8">
                            <div>Typically Offered</div>
                            <div>Course Attribute</div>
                          </div>
                          <div className="">
                            <div>{courses1.When}</div>
                            <div>Thesis Course</div>
                          </div>
                        </div>
                        <div className="bg-[#D9D9D9] px-8 font-bold">
                          <div>Class Schedule</div>
                        </div>
                        <table className="border-[#888888] w-[90%] mx-8 my-2">
                          <thead className="border-[1px] border-black bg-[#CCE3FF]">
                            <tr className="text-left font-bold ">
                              <th className="border-[1px] border-[#888888] pl-2">
                                Days
                              </th>
                              <th className="border-[1px] border-[#888888] pl-2">
                                Start
                              </th>
                              <th className="border-[1px] border-[#888888] pl-2">
                                End
                              </th>
                              <th className="border-[1px] border-[#888888] pl-2">
                                Room
                              </th>
                              <th className="border-[1px] border-[#888888] pl-2 text-center">
                                Instructor
                              </th>
                              <th className="border-[1px] border-[#888888] pl-2 text-center">
                                Dates
                              </th>
                            </tr>
                          </thead>
                          <tbody className="border-[1px] border-[#888888] text-[12px]">
                            {CourseSem1.map((item, index) => (
                              <tr className="border-[1px] border-[#888888]">
                                <td className="border-[1px] border-[#888888] pl-2">
                                  <div className="flex gap-2 items-center">
                                    <div>{courses1.Day}</div>
                                  </div>
                                </td>
                                <td className="border-[1px] border-[#888888] pl-2">
                                  {item.Start}
                                </td>
                                <td className="border-[1px] border-[#888888] pl-2">
                                  {item.End}
                                </td>
                                <td className="border-[1px] border-[#888888] pl-2">
                                  {courses1.Room}
                                </td>
                                <td className="border-[1px] border-[#888888] pl-2">
                                  {courses1.Instructor}
                                </td>
                                <td className="border-[1px] border-[#888888] pl-2">
                                  {courses1.Date}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <div className="flex gap-[4px] items-center justify-end mt-2 px-4">
              <button className="bg-[#D9D9D9] p-[5px] font-bold text-[12px] border-[1px] border-black w-[111.29px]">
                  <div>Back</div>
                </button>
                <div className="flex gap-[0.5px] items-center justify-end">
                  <button className="bg-[#F8BD26] p-[5px] font-bold  text-[18px] border-[1px] border-black">
                    <div className="">
                      <IoIosAdd className=" text-black" />
                    </div>
                  </button>
                 
                  <div className="bg-[#F8BD26] p-[5px] font-bold  text-[12px] border-[1px] border-black">
                  <a href="/krs-result"
          onClick={()=>
            {
              const convertedData = JSON.stringify(selectedCourse)
              localStorage.setItem("selectedCourse1", convertedData)
            }
          }>
                  
                    ADD TO CART
                   
                  </a>
                  </div>
                </div>
                
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default course;
