

import Image from "next/image"
import { categories } from "@/constants"


const Intro = () => {
  return (
    <section className="bg-[#ebebeb] py-12">
      <div className="container">
        <div className="grid grid-cols-6 gap-y-8">
          {
            categories?.map((item) => (
              <div key={item?.id} className="flex items-center flex-col cursor-pointer group">
                <Image className="rounded-full mb-3 hover:scale-[1.1] transition-all duration-500" width={96} height={96}  src={item?.image} alt={item?.name}/>
                <p className="duration-300 text-[13px] text-[#242424] text-center group-hover:text-[#eb0000]  transition-all">{item?.name}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Intro