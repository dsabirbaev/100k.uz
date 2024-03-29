

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
                        <div key={item?.id}>
                           
                           <Image  src={item?.img} width={80} height={64} alt={item?.name}/>
                            <p className="text-center mb-2">{item?.name}</p>
                            <p className="text-center">{item?.text}</p>
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