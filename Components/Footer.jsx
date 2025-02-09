import React from 'react'
import {FaSailboat} from 'react-icons/fa6'


const Footer = () => {
  return (
    <div className='max-w-[1140px] w-full py-8 m-auto border-t-4'>
        <div className='flex items-center m-auto justify-center'>
            <FaSailboat size={30} className='text-[var(--primary-dark)] mr-2'/>
            <h1 className='text-xl font-bold text-gray-700'>SurfNStay</h1>
        </div>
    </div>
  )
}

export default Footer