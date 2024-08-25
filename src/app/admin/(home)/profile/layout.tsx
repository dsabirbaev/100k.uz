

import Link from "next/link"

export default function HomeLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <>
       <section className="pt-24">
           <div className="container">
              <div className="flex gap-x-5">
                <div className="bg-red-400 w-[300px]">
                   
                    <ul>
                        <li>
                            <Link href="/admin/profile" title="profile">
                                Shaxsiy ma’lumotlar
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/profile/phone" title="phone">
                                Telefon raqamni o'zgartirish
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/profile/password" title="password">
                                Parolni o‘zgartirish
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/profile/telegram" title="telegram">
                                Parolni o‘zgartirish
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/profile/target-api" title="targat-api">
                                Target uchun API
                            </Link>
                        </li>
                    </ul>
                
                </div>
      
                <div>
                    {children}
                </div>
              </div>
           </div>
       </section>
      
    </>
  )
}