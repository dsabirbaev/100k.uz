"use client";

import { useState } from "react";
import Image from "next/image"
import sunglass	 from "@/assets/images/sunglasses.png"
import user	 from "@/assets/images/user.png"
import Link from "next/link"
import InputMask from 'react-input-mask';


const page = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  return (
    <section className="bg-[#f6f6f6] py-10">
        <div className="container">
            <div>
                <div className="flex items-center justify-between mb-5">
                    <h2 className="text-[#242424] text-[24px] font-bold">Aromatik massaj moyi, feromonlar bilan</h2>
                    <span className="font-semibold text-[16px]">
                        99,000 so'm
                    </span>
                </div>

                <div className="flex justify-between mb-10">
                    <div className="flex flex-col justify-between">
                        <Image src={sunglass} height={440} width={431} alt="pic" className="mb-1 rounded-lg" />
                        <div className="bg-white rounded-lg p-4 flex justify-between items-center">
                            <div className="flex items-center gap-x-5">
                                <Image src={user} alt="user" width={60} height={60}/>
                                <p className="text-[#eb0000] text-[16px]">USTORE</p>
                            </div>


                            <Link href="#" className="text-[15px] text-[#242424] py-[10px] px-[14px] rounded-[100px] hover:bg-[#eb0000] hover:text-white transition-all duration-500 border-2 border-transparent hover:border-red-400">Do'konning sahifasi</Link>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 w-[431px]">
                        <p className="text-[#eb0000] font-bold text-[28px] mb-6">Buyurtma berish</p>
                        <div className="flex items-center gap-x-1 mb-5">
                            <span>Mahsulot narxi:</span> <span className="font-bold">99,000 so'm</span>
                        </div>

                        <div className="bg-[#d1ecf1] rounded-md py-3 px-4 mb-40">
                            <p className="text-[15px] text-[#0c5460]">Yetqazib berish summasi manzilingizga ko'ra <span className="font-bold">20000 so'm</span>dan boshlanadi.</p>
                        </div>

                        <div className="flex justify-between flex-col">
                            <div className="mb-10">
                                <div className="border rounded-[100px] py-[11px] px-[15px] mb-5">
                                    <input type="text" placeholder="Ismingiz" className="border-none outline-none"/>
                                </div>

                                <div className="border rounded-[100px] py-[11px] px-[15px] mb-5">
                                    <input type="text" placeholder="Telefon raqamingiz" className="border-none outline-none"/>
                                </div>

                                <div className="rounded-[100px] overflow-hidden bg-transparent border relative h-[45px] px-[15px] mb-5">
                                
                                    <span className="absolute left-4 bottom-1 text-gray-400">
                                        +998
                                    </span>
                                    <InputMask className=" absolute bottom-1 left-0 bg-transparent w-full focus:ring-0 rounded-[16px] border-none outline-none pl-[68px] placeholder:text-gray-400" mask="(99)999-99-99" maskChar="_" type="tel" placeholder="(__)___-__-__">
                                                
                                    </InputMask>
                                </div>
                                
                                <div className="border rounded-[100px] py-[11px] px-[15px] mb-5">
                                    <select className="border-none outline-none w-full">
                                        <option value="">Hududni tanlang</option>
                                        <option value="tashkent">Toshkent shahri</option>
                                        <option value="qoraqalpogiston">Qoraqalpogiston</option>
                                        <option value="xorazm">Xorazm</option>
                                    </select>
                                </div>

                            </div>
                            <button className="bg-[#eb0000] text-white rounded-[100px] text-[18px] w-full py-[15px] hover:bg-black transition-all duration-500">
                                Buyurtma berish 
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <button
                        className={`py-4 px-4 font-medium text-[14px] ${activeTab === 'tab1' ? 'bg-white border border-b-0 rounded-tl-lg rounded-tr-lg border-[#dee2e6]' : 'text-[#eb0000]'}`}
                        onClick={() => handleTabClick('tab1')}
                    >
                        Batafsil ma'lumot
                    </button>
                    <button
                        className={`py-4 px-4 font-medium text-[14px] ${activeTab === 'tab2' ? 'bg-white border border-b-0 rounded-tl-lg rounded-tr-lg border-[#dee2e6]' : 'text-[#eb0000]'}`}
                        onClick={() => handleTabClick('tab2')}
                    >
                        Xaridorlar fikrlari 
                    </button>

                    <div className="p-4 bg-white">
                        {activeTab === 'tab1' ? (
                        <div className="py-10 text-[#242424]">
                            <p>- Massaj aromaterapiyada katta rol o'ynaydi.</p> 
                            <p>- Bunday massaj efir moylarining shifobaxsh kuchiga ega bo'lgani uchun va, albatta, teginish kuchi haqida unutmasligimiz kerak, u nafaqat tanaga, balki insonning ruhiyati va hissiyotlariga ham ta'sir qilishi mumkin.</p>
                   
                        </div>
                        ) : (
                        <div className="py-10">
                            <div className="flex items-center justify-between mb-10">
                                <p className="font-bold text-[20px]">Mijozlar tomonidan qoldirilgan izohlar</p>
                                <p className="text-[#eb0000] cursor-pointer">Izoh qoldirish</p>
                            </div>

                            <p className="text-[19px] text-[#6C757D text-center">Ushbu mahsulotga izohlar hali qoldirilmagan.</p>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default page