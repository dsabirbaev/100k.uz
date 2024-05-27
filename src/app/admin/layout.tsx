

import type { Metadata } from "next";




export const metadata: Metadata = {
  title: "Admin Sign In",
  description: "Admin Sign In",
};



export default function HomeLayout({
    children, 
  }: {
    children: React.ReactNode
  }) 
  
  {
    return (
      <>
        <div className="min-h-screen">
            {children}
        </div>
      </>
    )
  }