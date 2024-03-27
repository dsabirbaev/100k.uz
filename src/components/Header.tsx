

//// react icons
import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";


const Header = () => {
  return (
    <header>
      <div className="bg-[#eb0000]">
          <div className="container">
            <div className="flex items-center justify-between h-[40px]">
              <div className="flex items-center gap-x-4 text-[#FFFFFFCC] cursor-pointer text-[15px]">
                <div className="flex items-center gap-x-1">
                  <IoLogoAndroid className="text-[18px]" /> <span>Google Play</span>
                </div>
                <div className="flex items-center gap-x-1">
                  <FaApple className="text-[18px]"/> <span>Appstore</span>
                </div>
              </div>

              <div className="flex items-center gap-x-1 text-[#FFFFFFCC] cursor-pointer text-[14px]">
                <FaGlobe />
                <span>Mening profilim</span>
                <IoMdArrowDropdown />
              </div>
            </div>  
          </div>
      </div>
      <div>
          <div className="container">
              dw
          </div>
      </div>
    </header>
  )
}

export default Header