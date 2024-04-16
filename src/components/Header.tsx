"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

//// react icons
import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";
import { FaUser } from "react-icons/fa";


import logo from "../assets/icons/100k.png";

const Header = () => {

  const[menu, setMenu] = useState<boolean>(false)

  return (
    <header>
      <div className="bg-[#eb0000]">
          <div className="container">
            <div className="flex items-center justify-between h-[40px]">
              <div className="flex items-center gap-x-4 text-[#FFFFFFCC] cursor-pointer text-[15px]">
                <div className="flex items-center gap-x-1 group">
                  <IoLogoAndroid className="text-[18px] group-hover:text-white transition"/> <span className="group-hover:text-white transition">Google Play</span>
                </div>
                <div className="flex items-center gap-x-1 group">
                  <FaApple className="text-[18px] group-hover:text-white transition"/> <span className="group-hover:text-white transition">Appstore</span>
                </div>
              </div>

              <div onClick={() => setMenu(!menu)} className="relative flex items-center gap-x-1 text-[#FFFFFFCC] cursor-pointer text-[14px] group">
                <FaGlobe className="group-hover:text-white transition"/>
                <span className="group-hover:text-white transition">Mening profilim</span>
                <IoMdArrowDropdown className="group-hover:text-white transition"/>

                {
                  menu ? (
                    <ul className="absolute top-[160%] left-[-20px] flex flex-col bg-white text-black w-[160px] rounded-lg py-2 text-[15px] border shadow-md">
                      <li className="hover:bg-gray-50 py-2 pl-6">Aloqa uchun</li>
                      <li className="hover:bg-gray-50 py-2 pl-6">Profil</li>
                      <li className="hover:bg-gray-50 py-2 pl-6">Adminlar uchun</li>
                      <li className="hover:bg-gray-50 py-2 pl-6">Sozlamalar</li>
                    </ul>
                  ): null
                }
               
              </div>
            </div>  
          </div>
      </div>
      <div className="bg-white">
          <div className="container">
              <div className="flex items-center justify-between h-[63px]">
                <Link href="/" >
                  <Image src={logo} alt="logo" height={30}/>
                </Link>
                

                <div className="flex gap-x-2 justify-between rounded-full border overflow-hidden h-[37px] w-[428px] pl-4">
                  <input type="text" placeholder="qidiruv..." className="border-none outline-none w-full"/>

                  <span className="bg-[#eb0000] flex items-center justify-center w-[50px]">
                    <RiSearch2Line className="text-white text-xl cursor-pointer"/>
                  </span>
                </div>

                <div className="flex items-center gap-x-3 cursor-pointer group">
                  <FaUser className="group-hover:text-[#eb0000] transition"/>
                  <span className="text-[16px] text-[#242424] group-hover:text-[#eb0000] transition">Mening kabinetim</span>
                </div>
              </div>
          </div>
      </div>
    </header>
  )
}

export default Header