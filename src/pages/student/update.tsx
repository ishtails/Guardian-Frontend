import update from "../../assets/illustrations/updateInfo.svg";
import React, {useCallback, useState} from 'react'
import logo from "../../assets/icons/logo.svg";
import blur_cyan from "../../assets/blur-cyan.svg";
import UpdateInfoComp from "./updateInfoComp";

const updateInfo: React.FC<> = () => {
  return (
    <div className=" bg-[#FCFFFF] relative">
        {/* Logo */}
        <div className="hidden z-20 md:flex p-5 lg:px-5 absolute space-x-3 left-2 top-0">
            <img src={logo} className="w-[32px]" />
            <div className="flex flex-row font-lexend text-h28 text-primary">
                Guar
                <span className="font-lexend font-bold text-h28">dian</span>
            </div>
        </div>
        
        {/* Background Gradient */}
        <div className="px-6 h-screen hidden md:flex flex-col relative justify-center">
            <img
            src={blur_cyan}
            alt=""
            className="absolute z-0 top-[3%] left-[26%] w-[400px]"
            />

            <div className="flex flex-col z-0 relative">
                <div className="grid grid-cols-2 items-center m-auto w-full">
                    {/* Login Component */}
                    <div className="grid justify-center items-center h-full w-full">
                        {/* updateInfo Component */}
                        <UpdateInfoComp/>
                    </div>
                    {/* Illustration */}
                    <div className=" z-10 grid justify-center backdrop-blur-xl bg-[#F0F9FF]/50 rounded-xl shadow-card-shadow space-y-4 m-5 p-5 items-center">
                        <img
                            src={update}
                            alt=""
                            className="py-14 max-h-[720px]"
                        />
                    </div>
                </div>
            </div>
        </div>

        {/* Mobile Screen */}
        <div className="flex flex-col md:hidden px-5 h-screen">
            <img src={update} className="my-4" />

            <UpdateInfoComp/>

            <footer className="mt-auto bottom-0">
            <hr className="my-2" />
            <div className="flex flex-col justify-center items-center mb-2">
                <img src={logo} className="w-[32px] " />
            </div>
            </footer>
        </div>
    </div>

    
  );
};

export default updateInfo;