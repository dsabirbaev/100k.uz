

import Image from "next/image"

import { service } from "@/constants"




const Service = () => {
  return (
    <section className='bg-[#FDFDFD] py-10'>
        <div className='container'>
            <div>
                <h2 className='mb-5 font-bold text-center text-[35px]'>100k.uz qulayliklari</h2>
               
               <div className="flex  justify-between">
                {
                    service?.map((item) => (
                        <div key={item?.id} className="flex flex-col items-center w-[212px]">
                           
                           <Image  src={item?.img} width={80} height={64} alt={item?.name} className="mb-4"/>
                            <p className="font-bold text-[18px] text-center">{item?.name}</p>
                            <p className="text-[14px] text-[#242424] text-center">{item?.text}</p>
                        </div>
                    ))
                }
               </div>
            
            </div>
        </div>
    </section>
  )
}

export default Service