import React from 'react'
import { shortenText } from '../helper/helper'
import { MdDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';


function BasketCard({data,clickHandeler}) {
  return (
    <div className='w-75 sm:w-auto m-[0_auto] flex flex-col gap-3 sm:gap-0 sm:flex-row items-center  sm:justify-between border-[2px] border-dashed border-[#e2e2e2] rounded-[20px] mb-3 p-3 '>
        <Link to={`/Products/${data.id}`}>
            <img className='size-12.5 ' src={data.image} alt={data.title} />
        </Link>
        
        <Link to={`/Products/${data.id}`} >
           <p>{shortenText(data.title)}</p>
        </Link>
        <p>{data.price} $</p>
        <div className='flex items-center'>
            {data.quantity===1&&(<button className='bg-[#fe5d42] text-[#fff] border-none text-[1.3rem] size-[25px] leading-[25px] p-0.5 rounded-lg cursor-pointer' onClick={()=>clickHandeler("REMOVE_ITEM",data)}> <MdDeleteOutline/></button>)}
            {data.quantity>1&&(<button className='flex justify-center items-center bg-[#fe5d42] text-[#fff] border-none text-[1.3rem] size-[25px] leading-[25px] p-0.5 rounded-lg cursor-pointer' onClick={()=>clickHandeler("DECREASE",data)}>-</button>)}
            <span className='w-5 text-center m-[0_2px]'>
              {data.quantity}
            </span>
            <button className='flex justify-center items-center bg-[#fe5d42] text-[#fff] border-none text-[1.3rem] size-[25px] leading-[25px] p-0.5 rounded-lg cursor-pointer' onClick={()=>clickHandeler("INCREASE",data)}>+</button>

        </div>
    </div>
  )
}

export default BasketCard