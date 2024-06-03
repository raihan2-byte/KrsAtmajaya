import React from "react";
import CartImage from "../assets/cart.png";

const headerKrs = () => {
  return (
    <div className="">
      <div className="px-8  flex gap-4 mt-2">
        <div>
          <button className="p-2 bg-[#D3D3D3] w-[65px] h-[50px] rounded-t-[10px] text-[10px]">
            Search
          </button>
        </div>
        <div>
          <button className="p-2 bg-[#D3D3D3] w-[65px] h-[50px] rounded-t-[10px] text-[10px]">
            Plan
          </button>
        </div>
        <div>
          <button className="p-2 bg-[#D3D3D3] w-[65px] h-[50px] rounded-t-[10px] text-[10px]">
            Enroll
          </button>
        </div>
        <div>
          <button className="p-2 bg-[#D3D3D3] w-[65px] h-[50px] rounded-t-[10px] text-[10px]">
            My Academics
          </button>
        </div>
        <div>
          <button className="p-2 bg-[#D3D3D3] w-[65px] h-[50px] rounded-t-[10px] text-[10px]">
            My Results
          </button>
        </div>
      </div>
      <div>
        {/* <div className='w-full border-t border-[#D3D3D3] bg-[#D3D3D3]'></div> */}
        <hr className="border-t border-[#D3D3D3] bg-[#D3D3D3] w-full p-2" />
      </div>
      <div className="space-y-2 text-[12px]">
        <div className="px-4 ">Search by My Requirements</div>
        <div className="flex justify-between items-center">
          <div className="px-4 font-bold">
            Maximum Credits based on GPA = 0-1,29=12 SKS | 1,30-1,49=14 SKS |
            1,50-1,99=17 SKS | 2,00-3,00=20 SKS | 3,01-4,00=24 SKS
          </div>
          <div className="px-2">
            <img src={CartImage} alt="" />
          </div>
        </div>
        <div className="px-0">
          {" "}
          <hr className="border-t border-[#888888] bg-[#888888] w-full " />
        </div>
        <div className="flex justify-between items-center">
          <div className="text-[#1D518D] font-bold px-4">
            Current GPA = 3,75
          </div>
          <div className="flex gap-5 px-2">
            <div class="flex items-center mb-4">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                class="w-4 h-4 text-[#000000] bg-gray-100 border-black  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-radio-1"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Pending
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                class="w-4 h-4 text-[#000000] bg-gray-100 border-black  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-radio-1"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                In Progress
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                class="w-4 h-4 text-[#000000] bg-gray-100 border-black  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-radio-1"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Planned
              </label>
            </div>
          </div>
        </div>
        <div className="px-0">
          {" "}
          <hr className="border-t border-[#888888] bg-[#888888] w-full " />
        </div>
      </div>
    </div>
  );
};

export default headerKrs;
