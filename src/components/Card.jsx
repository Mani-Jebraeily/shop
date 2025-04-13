import React from 'react'
import { Link } from 'react-router-dom'
import{TbListDetails} from 'react-icons/tb'
import { TbShoppingBagCheck } from 'react-icons/tb';
import { shortenText } from '../helper/helper';

function Card({data}) {
    const {id,image,title,price}=data;
  return (
    <div className='w-67.5 m-2.5 p-5 flex flex-col items-start justify-end bg-[#fff] border-[2px] border-dashed border-[#e2e2e2] rounded-[20px]'> 
        <img src={image} alt={title} className='size-57.5  p-5 mb-5 bg-[#fff] m-auto' />
        <h3 className='text-[#fe5d42] text-[1.1rem] '>{shortenText(title)}</h3>
        <p className='text-[#666] text-[0.9rem] font-semibold m-[10px_0px_30px]'>{price} $</p>
        <div className='w-[100%] item-center flex justify-between  '>
            <Link to={`/Products/${id}`} className='text-[1.5rem] text-[#fe5d42] h-6.5 cursor-pointer'>
               <TbListDetails/>
            </Link>
          <div className='flex items-center'>action
            {/* <span className='w-5 items-center m-[0px_10px]'></span> */}
            <button className='bg-[#fe5d42] text-[#fff] border-none text-[1.7rem] size-8 leading-8 p-0.5 rounded-xs cursor-pointer'>
               <TbShoppingBagCheck/>
            </button>
          </div>
         
        </div>

    </div>
  )
}

export default Card