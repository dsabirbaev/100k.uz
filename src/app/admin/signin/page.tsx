

import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";


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

                <div className="flex flex-col gap-y-3 mb-20">
                    <input type="text" placeholder="Telefon raqamingiz" className="bg-[#ECEEF799] outline-none border-none rounded-[16px] text-[20px] h-[64px] px-[10px] w-[414px] placeholder:text-[16px]"/>
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