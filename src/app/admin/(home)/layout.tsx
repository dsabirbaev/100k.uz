

import type { Metadata } from "next";


import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/icons/100k.png";


//// react icons
import { FaUserCircle } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { FaBoxOpen } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { FcStatistics } from "react-icons/fc";
import { MdOutlinePayments } from "react-icons/md";

export const metadata: Metadata = {
  title: "Admin Cabinet",
  description: "Admin Cabinet",
};



export default function HomeLayout({
    children, 
  }: {
    children: React.ReactNode
  }) 
  
  {
    return (
      <>
       
        <header>
            <div className="container">
                <div className="flex items-center justify-between bg-white h-[64px] px-2">
                    <Link href="/" title="home">
                        <Image src={logo} alt="logo" height={24}/>
                    </Link>
                    <ul className="flex items-center gap-x-8">
                        <li>
                          <Link href="/admin" title="dashboard" className="flex flex-col items-center text-[#727c8e] text-[14px] hover:text-red-600 transition">
                              <AiFillDashboard className="text-xl"/>
                              Dashboard
                          </Link>
                        </li>
                        <li>
                          <Link href="/admin/market" title="dashboard" className="flex flex-col items-center text-[#727c8e] text-[14px] hover:text-red-600 transition">
                              <FaBoxOpen className="text-xl"/>
                              Market
                          </Link>
                        </li>
                        <li>
                          <Link href="/admin/stream" title="dashboard" className="flex flex-col items-center text-[#727c8e] text-[14px] hover:text-red-600 transition">
                             <FaLink className="text-xl"/>
                             Oqim
                          </Link>
                        </li>
                        <li>
                          <Link href="/admin/statistic" title="dashboard" className="flex flex-col items-center text-[#727c8e] text-[14px] hover:text-red-600 transition">
                              <FcStatistics className="text-xl"/>
                              Statistika
                          </Link>
                        </li>
                        <li>
                          <Link href="/admin/payment" title="dashboard" className="flex flex-col items-center text-[#727c8e] hover:text-red-600 transition">
                              <MdOutlinePayments className="text-xl"/>
                              To'lov
                          </Link>
                        </li>
                    </ul>

                    <FaUserCircle className="text-2xl"/>
                </div>
            </div>
        </header>
        <div className="min-h-screen">
            {children}
        </div>
  
      </>
    )
  }