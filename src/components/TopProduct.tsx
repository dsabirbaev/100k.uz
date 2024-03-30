

import Link from "next/link"


//// constants
import { product } from "@/constants"

import ProductCard from "./Ui/Card/ProductCard"

const TopProduct = () => {
  return (
    <section className="bg-[#f6f6f6] py-10">
        <div className="container">
            <div>
                <div className="flex items-center justify-between mb-3">
                    <h2 className="font-bold text-[30px]">Ommabop mahsulotlar</h2>
                    <Link href="#" className="text-[#eb0000] text-[18px]">Barchasini ko'rish</Link>
                </div>

                <div className="grid grid-cols-4">
                    {
                        product?.map((item) => (
                           <ProductCard key={item?.id} data={item}/>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default TopProduct