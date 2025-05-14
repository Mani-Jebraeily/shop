import React from 'react'
import { TbChecklist } from 'react-icons/tb'
import { FaHashtag } from 'react-icons/fa6'
import { BsPatchCheck } from 'react-icons/bs'

function BasketSideBar({state,clickHandeler}) {
console.log(state)

  return (
    <div className='w-75 mr-7.5 border-[2px] border-dashed border-[#fe5d42] rounded-[30px] p-5 *:flex *:items-center *:text-[#fe5d42] mb-4'>
        <div>
            <TbChecklist className='text-[1.3rem] mr-[5px]'/>
            <p>Total:</p>
            <span className='text-gray-500 mr-2.5'>{state.total} $</span>
        </div>
        
        <div>
            <FaHashtag className='text-[1.3rem] mr-[5px]'/>
            <p>Quantity:</p>
            <span className='text-gray-500 mr-2.5'>{state.itemCounter}</span>
        </div>

        <div>
            <BsPatchCheck className='text-[1.3rem] mr-[5px]'/>
            <p>Status:</p>
            <span className='text-gray-500 mr-2.5'>{!state.status && "Pending..."}</span>
        </div>
        <button  className='flex justify-center items-center  w-[100%] mt-10  border-dashed border-[2px] border-[#fe5d42] text-[1.1rem] p-[5px] rounded-[10px] cursor-pointer ' onClick={()=>{clickHandeler("CHECKOUT")}}>Checkout</button>

    </div>
  )
}

export default BasketSideBar