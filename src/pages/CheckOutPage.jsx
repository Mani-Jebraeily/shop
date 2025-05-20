import React from 'react'
import { Link } from 'react-router-dom'
import { useCard } from '../context/CardProvider'
import BasketCard from '../components/BasketCard'
import BasketSideBar from '../components/BasketSideBar'
import { FaArrowLeft } from 'react-icons/fa'

import basket from '../assets/basket.png'
function CheckOutPage() {
  const [state,dispatch]=useCard()
  const clickHandeler=(type,payload)=>{dispatch({type,payload})}

  console.log(state.selectedItems.length)
  return (
    
    // <div className='flex justify-between items-start p-2.5 min-h-[1000px]'>
    <div className={state.selectedItems.length===0? "w-50 md:w-[400px] m-[0_auto] ":'flex justify-end flex-col-reverse md:flex-row md:justify-between items-center md:items-start p-2.5 min-h-[1000px]'}>
      {state.selectedItems.length===0&& 
        <div className='flex m-[0_auto] w-50 md:w-[100%]  flex-col '>
          <img className='size-30 md:size-70 m-[0_auto]' src={basket} alt="empty basket image" />
          <p className='m-[20px_auto] md:p-[30px] ' >Your Basket is Empty!!</p>
          <Link className='m-[0_auto] w-50 h-10 md:h-20 text-[1rem] flex items-center justify-center bg-[#676368] p-[5px_10px] text-[#fff] rounded-xl '  to="/products">
            <FaArrowLeft className='mr-2.5 text-[#fff]'/> 
            <span className=' text-[#fff]'>
             Back to Shop
            </span>
          </Link>
        </div>
      }
      {!!state.selectedItems.length&&
      <>
       <BasketSideBar state={state} clickHandeler={clickHandeler}/>
       <div className='w-[100%]'>
        {state.selectedItems.map(i=>(<BasketCard key={i.id} clickHandeler={clickHandeler} data={i}/>))}
      </div>
      
      </>
      }
  
    </div>
  )
}

export default CheckOutPage