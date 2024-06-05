import React, { useState } from 'react'
import Header from '../header/header'
import Expand from "../../assets/expand.png"

import Course from "../krs/course"
import ExpandCourses from "../../assets/expand-krs.png"

const krsResult = () => {

  const [SelectedCourse, setSelectedCourse] = useState(false);
  return (

    <div className='w-full'>
        <Header/>
        <div className="flex justify-between items-center p-8 bg-[#FFDAB4]">
          <div className="flex items-center gap-2">
            <div className="text-[25px] font-bold text-[#1D518D]">
              KARTU RANCANGAN STUDI{" "}
            </div>
            <div>
              <img src={Expand} alt="" />
            </div>
          </div>
          <div>
            <form className="bg-[#F33000] p-2 rounded-[25px]">
              <label
                for="default-search"
                className="text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-1 px-16 text-sm text-[#0000007D] border border-gray-300 rounded-[25px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Cari Menu"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-[5px] bg-[#F33000] hover:bg-[#f39200d0] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[25px] text-sm px-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        
    </div>
  )
}

export default krsResult