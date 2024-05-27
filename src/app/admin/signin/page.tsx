"use client";

import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import InputMask from 'react-input-mask';

import logo from "@/assets/icons/100k.png";
const page = () => {
  return (
    <div>
        <header className="bg-white">
            <div className="flex items-center justify-between h-[56px] border border-t-0 border-x-0 px-5">
                <Link href="/" className="flex items-center gap-x-1 text-[#2f8af5] text-[18px]">
                    <FaArrowLeft /> <span> Do‘konga qaytish</span>
                </Link>
                <Link href="/" title="home">
                    <Image src={logo} alt="logo" height={24}/>
                </Link>
               
            </div>
        </header>

        <main>
            <section className="bg-[#f6f6f6] h-[calc(100vh-56px)] flex flex-col items-center justify-center">
                <h1 className="text-center text-[34px] font-semibold mb-[30px]">
                    <span className="block">Reklamachilar</span>
                    <span>kabinetiga kirish</span>
                </h1>

                <div className="flex flex-col gap-y-3 mb-20 w-[414px]">
                    <div className="rounded-[20px] overflow-hidden bg-[#ECEEF799] relative h-[64px]">
                        <label for="phone" className="text-[12px] absolute top-[10px] left-4 text-[#2b2b2b]">
                            Telefon raqamangiz
                        </label>
                        <span className="absolute text-[20px] left-4 bottom-1 text-[#2b2b2b]">
                            +998
                        </span>
                        <InputMask id="phone" className="absolute bottom-1 left-0 w-full focus:ring-0 rounded-[16px] text-[20px]  border-none outline-none bg-transparent pl-[68px] placeholder:text-[#2b2b2b]" mask="(99)999-99-99" maskChar="-" type="tel" placeholder="(XX) XXX-XX-XX">
                                    
                        </InputMask>
                    </div>
                   
                    <label htmlFor="g" className="flex items-center gap-x-1">
                        <input id="g" type="checkbox" className="w-[15px] h-[15px]"/>
                        <p className="text-[14px]">Men
                            <Link href="#" className="ml-2 hover:underline font-medium">
                                 foydalanish shartlari
                            </Link>  bilan tanishdim
                            
                            </p>
                    </label>

                    <button className="bg-[#fc3] text-[18px] text-[#2b2b2b] font-medium p-[16px] rounded-[18px]">
                        SMS kodni olish
                    </button>


                    <button className="bg-[#ECEEF799] text-[18px] text-[#2b2b2b] font-medium p-[16px] rounded-[18px]">
                        Shaxsiy parol orqali kirish
                    </button>
                </div>

                <div className="flex flex-col items-center">
                    <div className="flex items-center gap-x-4 text-[#2f8af5] text-[14px] mb-[10px]">
                        <span>Maxfiylik siyosati</span>
                        <span>Foydalanish shartlari</span>
                    </div>
                    <p className="text-[14px]">Copyright © 2020 Barcha huquqlar himoyalangan</p>
                </div>
            </section>
        </main>

        
    </div>
  )
}

export default page