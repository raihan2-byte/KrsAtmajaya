import React from "react";
import IconProfile from "../../assets/icon-profiles.png";
import IconLogout from "../../assets/icon-logout.png";
import IconPencil from "../../assets/icon-pencil.png";

const header = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between p-8">
        <div>
          <div className="flex items-center">
            <div className="text-[55px] font-bold">MARSELA GRACIA</div>
            <div className="mb-6">
              <img src={IconPencil} alt="" className="w-[36px] h-[25px]"/>
            </div>
          </div>
          <div className="flex">
            <div className="flex justify-between gap-5 text-[15px] text-[#1D518D] font-bold">
              <div className="">
                <div>NOMOR INDUK MAHASISWA</div>
                <div>STUDENT ID</div>
                <div>FAKULTAS/PRODI</div>
                <div>E-MAIL</div>
                <div>MOBILE PHONE</div>
                <div>STATUS</div>
              </div>
              <div className="">
                <div>:</div>
                <div>:</div>
                <div>:</div>
                <div>:</div>
                <div>:</div>
                <div>:</div>
              </div>
              <div className="">
                <div>202004530025</div>
                <div>12020001642</div>
                <div>TEKNIK/TEKNIK INDUSTRI</div>
                <div>MARSELA.202004530025@STUDENT.AC.ID</div>
                <div>+62812-1234-5678</div>
                <div>UNDERGRADUATE S1 (GANJIL 2023/2024)</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mx-10">
          <img src={IconProfile} alt="" />
          <img src={IconLogout} alt="" className="w-[50px] h-[46px] mt-auto" />
        </div>
      </div>
    </div>
  );
};

export default header;
