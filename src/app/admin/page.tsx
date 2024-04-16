"use client";

import { useState, useEffect } from "react";
import { redirect } from 'next/navigation'


const page = () => {
  const[reg, setReg] = useState<boolean>(false);


  useEffect(() => {
   
    if (!reg) {
      redirect('/admin/signin')
    }
  }, [reg]);


  return (
    <>
        {
            reg ? (
                <p>admin dashboard</p>
            ): (
                <p>redirect ....</p>
            )
        }
    </>
  )
}

export default page