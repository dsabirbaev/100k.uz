
import { HiUser } from "react-icons/hi2";


const page = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="bg-[#007aff] px-6 py-10 pt-0">
            <div className="flex items-center justify-center flex-col py-10">
              
              <span className="bg-white rounded-full pb-2 mb-10"> 
                <HiUser className="text-6xl object-contain"/>
              </span>

              <p className="text-[#999] text-[16px]">Saytda "2024-03-26" chi sanadan</p>
            </div>

            <div className="bg-[#192a8d] w-full rounded-[5px] text-white px-8 py-4">
              <div className="mb-10">
                <h5 className="mb-[5px]">Hisobingizda</h5>
                <h2 className="text-[35px] font-bold">0 bonus</h2>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[14px] tracking-[1px]">Coin: 0, Tahminiy balans: 0 bonus</p>
                <span className="font-bold tracking-[2px] text-[22px]">100k</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
   
  )
}

export default page