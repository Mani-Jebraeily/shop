import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'


function NotFoundPage() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='font-semibold m-10'>Page Not Found!!</h1>
     <Link className='m-[0_auto] w-50 h-10 md:h-20 text-[1rem] flex items-center justify-center bg-[#676368] p-[5px_10px] text-[#fff] rounded-xl '  to="/products">
            <FaArrowLeft className='mr-2.5 text-[#fff]'/> 
            <span className=' text-[#fff]'>
             Back to Shop
            </span>
     </Link>
    </div>
  )
}

export default NotFoundPage