
import Link from "next/link"


const Footer = () => {
  return (
    <footer className="bg-[#161616] pt-10 pb-4">
      <div className="container">
        <div className="h-[110px] flex flex-col justify-between">
          <ul className="flex items-center justify-between">
            <li>
              <Link href="#" className="text-[#FFFFFF80] hover:text-[#eb0000] text-[14px]">Mening kabinetim</Link>
            </li>
            <li>
              <Link href="#" className="text-[#FFFFFF80] hover:text-[#eb0000] text-[14px]">Biz haqimizda</Link>
            </li>
            <li>
              <Link href="#" className="text-[#FFFFFF80] hover:text-[#eb0000] text-[14px]">Aloqa uchun</Link>
            </li>
            <li>
              <Link href="#" className="text-[#FFFFFF80] hover:text-[#eb0000] text-[14px]">Ommaviy oferta</Link>
            </li>
          </ul>

          <div className="flex items-center justify-between text-[#FFFFFF80] text-[14px]">
            <div>
              2016-2021 - 100K.UZ
            </div>

            <div>
              Barcha huquqlar himoyalangan
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer