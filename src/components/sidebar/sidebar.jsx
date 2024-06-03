import React, { useState } from "react";
import LogoAtmaJaya from "../../assets/logo.png";
import FolderCokelat from "../../assets/folder-cokelat.png";
import ExpandImg from "../../assets/expand.png";

const sidebar = () => {
  const [selfServiceDropdownOpen, setSelfServiceDropdownOpen] = useState(false);
  const [studentFinancial, setStudentFinancial] = useState(false);

  return (
    <div className="bg-[#FFDAB4]">
      <div className="px-2">
        <div>
          <img src={LogoAtmaJaya} alt="" className="w-[230px]" />
        </div>
        <div className="text-[#1D518D]">
          <div className="flex items-center gap-1">
            <div>
              <img src={FolderCokelat} alt="" />
            </div>
            <div className="text-[10px] font-bold">FAVORITES</div>
          </div>
        </div>
        <div className="text-[#1D518D]">
          <div className="flex items-center gap-1">
            <div>
              <img src={FolderCokelat} alt="" />
            </div>
            <div className="text-[10px] font-bold">HOME</div>
          </div>
        </div>
        <div className="text-[#1D518D]">
          <div className="flex items-center gap-1">
            <div>
              <img src={FolderCokelat} alt="" />
            </div>
            <div className="text-[10px] font-bold">SELF SERVICE</div>
            <div className="dropdown inline-block relative">
              <button
                className="text-white font-semibold py-1 px-2 inline-flex items-center"
                onClick={() => {
                  setSelfServiceDropdownOpen(!selfServiceDropdownOpen);
                }}
              >
                <img src={ExpandImg} alt="" />
              </button>
              <ul
                className={`dropdown-menu ${
                  selfServiceDropdownOpen ? "block" : "hidden"
                } absolute left-0 mt-1  text-gray-700 w-[40vh] `}
              >
                <li className="">
                  <a
                    className="text-[##1D518D] font-semibold hover:bg-gray-100 block whitespace-no-wrap"
                    href="/sidebar"
                  >
                    Recently Used
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-[#1D518D]">
          <div className="flex items-center gap-1">
            <div>
              <img src={FolderCokelat} alt="" />
            </div>
            <div className="text-[10px] font-bold">STUDENT FINANCIALS</div>
            <div className="dropdown inline-block relative">
              <button
                className="text-white font-semibold py-1 px-2 inline-flex items-center"
                onClick={() => {
                  setStudentFinancial(!studentFinancial);
                }}
              >
                <img src={ExpandImg} alt="" />
              </button>
              <ul
                className={`dropdown-menu ${
                  studentFinancial ? "block" : "hidden"
                } absolute left-0 mt-1 bg-white text-gray-700 w-[40vh] border-solid border-[1px] border-black`}
              >
                <li className="">
                  <a
                    className="text-black font-semibold hover:bg-gray-100 block whitespace-no-wrap"
                    href="/home"
                  >
                    Recently Used
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-[#1D518D]">
          <div className="flex items-center gap-1">
            <div>
              <img src={FolderCokelat} alt="" />
            </div>
            <div className="text-[10px] font-bold">CAMPUS COMMUNITY</div>
            <div>
              <img src={ExpandImg} alt="" />
            </div>
          </div>
        </div>
        <div className="text-[#1D518D]">
          <div className="flex items-center gap-1">
            <div>
              <img src={FolderCokelat} alt="" />
            </div>
            <div className="text-[10px] font-bold">REPORTING TOOLS</div>
          </div>
        </div>
        <div className="text-[#1D518D]">
          <div className="flex items-center gap-1">
            <div>
              <img src={FolderCokelat} alt="" />
            </div>
            <div className="text-[10px] font-bold">PEPLE TOOLS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
