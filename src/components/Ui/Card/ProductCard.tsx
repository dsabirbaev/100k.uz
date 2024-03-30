"use client"


import { FC } from "react";
import Image from "next/image"

import { ICardProps } from "@/types";

const ProductCard: FC<ICardProps> = ({ data:{img, name, price, order, id} }) => {
  return (
    <div className="w-[219px] bg-white rounded-lg">
        <Image src={img} alt={name} className="mb-1" />
        <div className="p-2">
            <p className="mb-2">{name}</p>
            <div className="flex items-center gap-x-1 mb-2">
                <span className="font-bold">{price}</span>
                <span className="text-[14px]">so'm</span>
            </div>

            <div className="flex justify-end text-gray-300 text-[13px]">
                <span>buyurtmalar:</span>
                <span>{order}</span>
            </div>
        </div>
    </div>
  )
}

export default ProductCard