import React, { useState } from "react";
import CartImage from "../assets/cart.png";

const HeaderKrs = ({ totalUnits, updateCartItemCount }) => {

  const GPA = 1.1; // Misalnya, Anda menggunakan nilai GPA ini untuk menghitung maxCredits

  let maxCredits;
  let alertMessage = "";

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
    alertMessage = `Anda melebihi batas SKS yang diperbolehkan (${maxCredits} SKS) karena GPA Anda tidak memenuhi syarat.`;
  }

  const [cartItemCount, setCartItemCount] = useState(0); // Jumlah item di keranjang belanja

  return (
    <div className="">
      <div className="px-8  flex gap-4 mt-2">
        {/* Tombol lainnya */}
      </div>
      <div>
        <hr className="border-t border-[#D3D3D3] bg-[#D3D3D3] w-full p-2" />
      </div>
      <div className="space-y-2 text-[12px]">
        <div className="px-4 ">Search by My Requirements</div>
        <div className="flex justify-between items-center">
          <div className="px-4 font-bold">
            Maximum Credits based on GPA = 0-1,29=12 SKS | 1,30-1,49=14 SKS |
            1,50-1,99=17 SKS | 2,00-3,00=20 SKS | 3,01-4,00=24 SKS
          </div>
          <div className="px-2 relative">
            <div className="absolute top-0 left-0 bg-white rounded-full w-5 h-5 flex items-center justify-center text-black font-bold">
              1
            </div>
            <img src={CartImage} alt="" />
          </div>
        </div>
        <div className="px-0">
          <hr className="border-t border-[#888888] bg-[#888888] w-full " />
        </div>
        <div className="flex justify-between items-center">
          <div className="text-[#1D518D] font-bold px-4">
            Current GPA = {GPA}
          </div>
          <div className="flex gap-5 px-2">{/* Radio buttons */}</div>
        </div>
        <div className="px-0">
          <hr className="border-t border-[#888888] bg-[#888888] w-full " />
        </div>
        <div className="px-4 text-red-500">{alertMessage}</div>
      </div>
    </div>
  );
};

export default HeaderKrs;
