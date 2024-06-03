import React, { useState } from "react";
import Course from "./course";
import ExpandCourses from "../../assets/expand-krs.png";
import { IoIosAdd } from "react-icons/io";

import AddIcon from "../../assets/add.png"

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

const CourseSem2 = [
  {
    CourseCode: "TIN 201",
    Description: "Kalkulus I",
    Units: "2",
    When: "EVEN",
    Day: "Mon 10.00-12.00 WIB",
    Room: "Dormitory 1 BSD",
    Instructor: "Trifenaus Prabu Hidayat, S.T., M.T.",
    Grade: "",
  },
  {
    CourseCode: "TIN 202",
    Description: "Kalkulus II",
    Units: "2",
    When: "EVEN",
    Day: "Tues 10.00-12.00 WIB",
    Room: "AG 101 BSD",
    Instructor: "Andre Sugioko, S.T.,M.T.",
    Grade: "",
  },
  {
    CourseCode: "TIN 203",
    Description: "Praktikum CAD",
    Units: "2",
    When: "EVEN",
    Day: "Wed 10.00-12.00 WIB",
    Room: "A 1102 BSD",
    Instructor: "Hotma Antoni Hutahaean, S.T., M.T., IPM",
    Grade: "",
  },
  {
    CourseCode: "TIN 204",
    Description: "Praktikum Fisika",
    Units: "2",
    When: "EVEN",
    Day: "Fri 10.00-12.00 WIB",
    Room: "Dormitory 3 SMG",
    Instructor: "Ronald Sukwadi, Ph.D., IPM",
    Grade: "",
  },
];

const CourseSem3 = [
  {
    CourseCode: "TIN 301",
    Description: "Aljabar Linier",
    Units: "2",
    When: "ODD",
    Day: "Mon 10.00-12.00 WIB",
    Room: "Dormitory 1 BSD",
    Instructor: "Trifenaus Prabu Hidayat, S.T., M.T.",
    Grade: "",
  },
  {
    CourseCode: "TIN 302",
    Description: "Kewirausahaan",
    Units: "2",
    When: "ODD",
    Day: "Tues 10.00-12.00 WIB",
    Room: "AG 101 BSD",
    Instructor: "Andre Sugioko, S.T.,M.T.",
    Grade: "",
  },
  {
    CourseCode: "TIN 303",
    Description: "Kewarganegaraan",
    Units: "2",
    When: "ODD",
    Day: "Wed 10.00-12.00 WIB",
    Room: "A 1102 BSD",
    Instructor: "Hotma Antoni Hutahaean, S.T., M.T., IPM",
    Grade: "",
  },
  {
    CourseCode: "TIN 304",
    Description: "Agama",
    Units: "2",
    When: "ODD",
    Day: "Fri 10.00-12.00 WIB",
    Room: "Dormitory 3 SMG",
    Instructor: "Ronald Sukwadi, Ph.D., IPM",
    Grade: "",
  },
];

const CourseSem4 = [
  {
    CourseCode: "TIN 401",
    Description: "Kerja Praktik/KKN",
    Units: "2",
    When: "EVEN",
    Day: "Mon 10.00-12.00 WIB",
    Room: "Dormitory 1 BSD",
    Instructor: "Trifenaus Prabu Hidayat, S.T., M.T.",
    Grade: "",
  },
  {
    CourseCode: "TIN 402",
    Description: "Seminar",
    Units: "2",
    When: "EVEN",
    Day: "Tues 10.00-12.00 WIB",
    Room: "AG 101 BSD",
    Instructor: "Andre Sugioko, S.T.,M.T.",
    Grade: "",
  },
  {
    CourseCode: "TIN 403",
    Description: "Proses Manufaktur",
    Units: "2",
    When: "EVEN",
    Day: "Wed 10.00-12.00 WIB",
    Room: "A 1102 BSD",
    Instructor: "Hotma Antoni Hutahaean, S.T., M.T., IPM",
    Grade: "",
  },
  {
    CourseCode: "TIN 404",
    Description: "Tugas Akhir",
    Units: "2",
    When: "EVEN",
    Day: "Fri 10.00-12.00 WIB",
    Room: "Dormitory 3 SMG",
    Instructor: "Ronald Sukwadi, Ph.D., IPM",
    Grade: "",
  },
];


const krs = () => {
  const [OpenAllCourses, setOpenAllCourses] = useState(false);

  return (
    <div className="w-full">
      <div className="dropdown w-full">
        <div className="flex py-2 pl-4 bg-[#D9D9D9] justify-between text-[12px] text-[#000000] font-bold">
          <div className="flex items-center gap-3">
            <button
              className="text-black font-semibold py-1 items-center"
              onClick={() => {
                setOpenAllCourses(!OpenAllCourses);
              }}
            >
              <div>
                <img src={ExpandCourses} alt="" />
              </div>
            </button>
            <div>S1 - INDUSTRIAL ENGINEERING</div>
          </div>
          <div className="px-2">Not Satisfied</div>
        </div>
        <ul className={`dropdown-menu ${OpenAllCourses ? "block" : "hidden"} bg-white text-black-700`}>
          <li className="flex justify-between items-center w-full">
            <div className="flex items-center px-10 py-2 justify-between w-full">
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
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
          <li className="justify-between items-center w-full">
            <Course courses={CourseSem1} semester={1} />
          </li>
          <li className="justify-between items-center w-full">
            <Course courses={CourseSem2} semester={2} />
          </li>
          <li className="justify-between items-center w-full">
            <Course courses={CourseSem3} semester={3} />
          </li>
          <li className="justify-between items-center w-full">
            <Course courses={CourseSem4} semester={4} />
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
