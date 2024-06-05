import React, { useEffect, useState } from "react";
import ExpandKrs from "../../assets/expand-krs.png";
import DeleteIcon from "../../assets/deleted-icon.png";


const SelectedCourse = ({onTotalUnitsChange }) => {
  const [selectedCourse, setSelectedCourse] = useState(false);
  const [myCourses, setMyCourses] = useState([]);
  const [totalUnits, setTotalUnits] = useState(0); // State untuk menyimpan total units

  useEffect(() => {
    const coursesData = JSON.parse(localStorage.getItem("selectedCourse1"));
    if (coursesData) {
      setMyCourses(coursesData);
    } else {
      setMyCourses([]);
    }
  }, []);

  // Hitung total units setiap kali myCourses berubah
  useEffect(() => {
    const total = myCourses.reduce((acc, course) => acc + course.Units, 0);
    setTotalUnits(total);
    onTotalUnitsChange(total); // Memanggil fungsi yang diterima dari prop
  }, [myCourses, onTotalUnitsChange]);

  const handleDelete = (courseCode) => {
    const updatedCourses = myCourses.filter(course => course.CourseCode !== courseCode);
    setMyCourses(updatedCourses);
    localStorage.setItem("selectedCourse1", JSON.stringify(updatedCourses));
  };

  const handleProcess = () => {
    const GPA = 1.67; // Anda dapat mengubah nilai GPA sesuai kebutuhan
    let maxCredits;

    if (GPA >= 0 && GPA <= 1.29) {
      maxCredits = 12;
    } else if (GPA >= 1.30 && GPA <= 1.49) {
      maxCredits = 14;
    } else if (GPA >= 1.50 && GPA <= 1.99) {
      maxCredits = 17;
    } else if (GPA >= 2.00 && GPA <= 3.00) {
      maxCredits = 20;
    } else if (GPA >= 3.01 && GPA <= 4.00) {
      maxCredits = 24;
    }

    if (totalUnits > maxCredits) {
      alert(
        `Anda melebihi batas SKS yang diperbolehkan (${maxCredits} SKS) karena GPA Anda tidak memenuhi syarat.`
      );
    } else {
      localStorage.setItem("selectedCourse1", JSON.stringify(myCourses));
      localStorage.setItem("totalUnits", totalUnits);
      window.location.href = "/krs-finish";
    }
  };



  return (
    <div>
      <div className="dropdown w-full">
        <div className="flex justify-between items-center pl-8 pr-2">
          <div className="flex items-center gap-2">
            <button
              className="text-black font-semibold py-1 items-center"
              onClick={() => setSelectedCourse(!selectedCourse)}
            >
              <div>
                <img src={ExpandKrs} alt="Expand" />
              </div>
            </button>
            <div>CORE COURSES</div>
          </div>
        </div>

        <ul className={`dropdown-menu ${selectedCourse ? "hidden" : "block"} bg-white text-black-700`}>
          <li className="flex justify-between items-center w-full"></li>
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
              <tbody className="border-[1px] border-[#888888] text-[12px]">
                {myCourses.map((course) => (
                  <tr key={course.CourseCode} className="border-[1px] border-[#888888]">
                    <td className="border-[1px] border-[#888888] pl-2">
                      <div className="flex gap-2 items-center">
                        <button onClick={() => handleDelete(course.CourseCode)}>
                          <div>
                            <img src={DeleteIcon} alt="Delete" />
                          </div>
                        </button>
                        <div>{course.CourseCode}</div>
                      </div>
                    </td>
                    <td className="border-[1px] border-[#888888] pl-2">{course.Description}</td>
                    <td className="border-[1px] border-[#888888] pl-2">{course.Units}</td>
                    <td className="border-[1px] border-[#888888] pl-2">{course.When}</td>
                    <td className="border-[1px] border-[#888888] pl-2">{course.Day}</td>
                    <td className="border-[1px] border-[#888888] pl-2">{course.Room}</td>
                    <td className="border-[1px] border-[#888888] pl-2">{course.Instructor}</td>
                    <td className="border-[1px] border-[#888888] pl-2">{course.Grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end w-[87.5%] gap-8">
            <div>
              <a href="/krs">
                <button className="bg-[#BBD9FB] flex items-center text-center justify-center w-[98px] h-[21px] border-[1px] border-black font-bold">
                  BACK
                </button>
              </a>
            </div>
            <div>
              <button onClick={handleProcess} className="bg-[#FDEDB4] flex items-center text-center justify-center w-[98px] h-[21px] border-[1px] border-black font-bold">
                PROCESS
              </button>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SelectedCourse;
