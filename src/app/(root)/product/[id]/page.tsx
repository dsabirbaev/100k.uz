
import Image from "next/image"
import sunglass	 from "@/assets/images/sunglasses.png"

const page = () => {
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

                <div className="flex justify-between">
                    <div>
                        <Image src={sunglass} height={440} width={431} alt="pic" className="mb-1 rounded-lg" />
                    </div>

                    <div className="bg-white rounded-lg p-4 w-[431px]">
                        <p className="text-[#eb0000] font-bold text-[28px] mb-4">Buyurtma berish</p>
                        <div className="flex items-center gap-x-1 mb-4">
                            <span>Mahsulot narxi:</span> <span className="font-bold">99,000 so'm</span>
                        </div>

                        <div className="bg-[#d1ecf1] rounded-md py-3 px-4">
                            <p className="text-[15px] text-[#0c5460]">Yetqazib berish summasi manzilingizga ko'ra <span className="font-bold">20000 so'm</span>dan boshlanadi.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default page