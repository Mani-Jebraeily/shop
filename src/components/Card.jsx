import React from 'react'
import { Link } from 'react-router-dom'
import{TbListDetails} from 'react-icons/tb'
import { TbShoppingBagCheck } from 'react-icons/tb';
import { MdDeleteOutline } from 'react-icons/md';
import { producyQuantity, shortenText } from '../helper/helper';
import { Loader } from 'rsuite';
import { useCard } from '../context/CardProvider';

function Card({data}) {
    const {id,image,title,price}=data;
    const [state,dispatch]=useCard()
    const quantity=producyQuantity(state,id)
    console.log(state)
    const clickHandeler=(type)=>{
      dispatch({type,payload:data})
    }
  return (
    <div className='w-67.5  m-2.5  p-5  gap-1 flex flex-col items-center justify-end  bg-[#fff] border-[2px] border-dashed border-[#e2e2e2] rounded-[20px]'> 
        <img src={image} alt={title} className='size-57.5  p-5 mb-5 bg-[#fff]' />
        <h3 className='text-[#fe5d42] text-[1.1rem] '>{shortenText(title)}</h3>
        <p className='text-[#666] text-[0.9rem] font-semibold m-[10px_0px_30px]'>{price} $</p>

        <div className='w-[95%] h-12 items-center flex  justify-between'>
            <div>
              <Link to={`/Products/${id}`} className='text-[1.5rem] text-[#fe5d42] h-6.5 cursor-pointer'>
                 <TbListDetails/>
              </Link>
            </div>
          
          <div className='flex items-center'>
                        {quantity===1&&(
                               <button onClick={()=>clickHandeler("REMOVE_ITEM")} className='bg-[#fe5d42] text-[#fff] border-none text-[1.7rem] size-8 leading-8 p-0.5 rounded-lg cursor-pointer flex justify-center'>
                               <MdDeleteOutline/>
                             </button>
                          )}
              
              
                        {quantity>1&&(
                          <button onClick={()=>clickHandeler("DECREASE")} className='bg-[#fe5d42] text-[#fff] border-none text-[1.7rem] size-8 leading-8 p-0.5 rounded-lg cursor-pointer flex justify-center items-center'>-</button>
                          )}

                         {!!quantity &&(
                          <span className='m-[0_10px]'>{quantity}</span>
                         )}
                      
              
                          {quantity===0?
                              <button onClick={()=>clickHandeler("ADD_ITEM")} className='bg-[#fe5d42] text-[#fff] border-none text-[1.7rem] size-8 leading-8 p-0.5 rounded-lg cursor-pointer flex justify-center'>
                              <TbShoppingBagCheck/>
                           </button>
                          :
                          <button onClick={()=>clickHandeler("INCREASE")} className='bg-[#fe5d42] text-[#fff] border-none text-[1.7rem] size-8 leading-8 p-0.5 rounded-lg cursor-pointer flex justify-center items-center'>+</button>
                          }
          </div>
         
        </div>

    </div>
  )
}

export default Card