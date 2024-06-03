import React from "react";
import LoginImage from "../../assets/login-foto.png";
import LogoAtmajaya from "../../assets/logo.png";
import Globe from "../../assets/globe.png";

const login = () => {
  return (
    <div className="text-black bg-[#FF8201] w-full h-full p-10">
      <div className="flex w-[90%] m-auto justify-evenly">
        <div className="">
          <img src={LoginImage} alt="" className="h-[80vh] w-[250px]" />
        </div>
        <div>
          <div>
            <img src={LogoAtmajaya} alt="" className="w-[600px] " />
          </div>
          <div className="gap-8 flex flex-col text-center mt-6">
            <div className="gap-2 flex flex-col">
              <div className="font-bold">STUDENT ID</div>
              <div className="">
                <input
                  type="text"
                  className="w-[520px] rounded-[22px] p-px px-3"
                />
              </div>
            </div>
            <div className="gap-2 flex flex-col">
              <div className="font-bold">PASSWORD</div>
              <div className="">
                <input
                  type="text"
                  className="w-[520px] rounded-[22px] p-px px-3"
                />
              </div>
            </div>
            <div>
              <a href="/homes">
              <button className="w-[90px] bg-[#C3D6EC] p-1 font-semibold">
                Sign in 
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-end items-center mt-5">
        <img src={Globe} alt="" />
        <div className="text-right font-bold">
          https://www.atmajaya.ac.id/id/
        </div>
      </div>
    </div>
  );
};

export default login;
