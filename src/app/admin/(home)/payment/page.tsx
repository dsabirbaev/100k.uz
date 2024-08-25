

import React from 'react'

const page = () => {
  return (
    <section className='pb-10 pt-28'>
        <div className='container'>
            <div className='flex gap-x-5'>
                <div className='border rounded-md w-full'>
                    <div className='bg-gray-50 p-4 border border-t-0 border-x-0'>
                        <p className='text-[20px]'>Mening hisobim</p>
                    </div>
                    <div className='p-4'>
                        <div className='border border-t-0 border-x-0 py-[10px] text-[18px]'>
                            ID raqamingiz: 8129374
                        </div>
                        <div className='border border-t-0 border-x-0 py-[10px] text-[18px]'>
                            Asosiy balansda: 0 so'm
                        </div>
                        <div className='border border-t-0 border-x-0 py-[10px] text-[18px]'>
                            Bonus balans: 0 COIN
                        </div>
                        <div className='py-[10px] text-[18px]'>
                            To'lab berildi: 0 so'm
                        </div>
                    </div>
                </div>
                <div className='border rounded-md w-full'>
                    <div className='bg-gray-50 p-4 border border-t-0 border-x-0'>
                        <p className='text-[20px]'>To'lovga sorov berish formasi</p>
                    </div>
                    <div className='p-4'>
                        <div className='py-[10px] text-[18px]'>
                           <label htmlFor="card-number" className='text-[14px]'>Karta raqamingizni kiriting</label>
                           <input id='card-number' type="text" placeholder='Karta raqamingizni kiriting' className='outline-none border p-2 rounded-[5px] w-full mt-2'/>
                        </div>
                        <div className='py-[10px] text-[18px]'>
                           <label htmlFor="payment" className='text-[14px]'>Summani kiriting</label>
                           <input id='payment' type="text" placeholder='Summani kiriting' className='outline-none border p-2 rounded-[5px] w-full mt-2'/>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default page