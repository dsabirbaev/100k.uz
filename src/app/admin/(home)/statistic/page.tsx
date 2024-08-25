import React from 'react'

const page = () => {
  return (
    <section className='pb-10 pt-28'>
      <div className='container'>
        <div className='flex items-center justify-center'>
            <div className='flex w-full'>
              <input type="text" className='w-full outline-none border p-2 rounded-l-md'/>
              <button className='bg-blue-500 text-white text-[14px] font-semibold px-[18px] hover:bg-blue-600 transition rounded-r-md'>Izlash</button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default page