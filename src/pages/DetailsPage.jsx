import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useProductDetails } from '../context/ProductsContext'
import { SiOpenproject } from 'react-icons/si'
import { IoMdPricetag } from 'react-icons/io'
import { FaArrowLeft } from 'react-icons/fa'

function DetailsPage() {
  const {id}=useParams()

  const productDetails=useProductDetails(+id)

  // if(!productsDetails)return <Loader 
  return (
    <div className='flex flex-col md:flex-row items-start min-h-[1000px] w-[100%] '>
      <div className='  w-[274px] md:w-[450px] m-[0_auto] mb-5 md:m-2.5 md:mr-[50px] '>
        <img className=' w-[100%] w -75 md:w-[450px] p-[15px_25px] bg-[#fff] border-[2px] border-dashed border-[#fe5d42] rounded-[50px] md:m-2.5 md:mr-[50px]' src={productDetails.image} alt={productDetails.title} />    
      </div>
      <div className='  md:w-[100%] w-75 m-[0px_auto] border-[2px] border-dashed border-[#e2e2e2] md:m-2.5 p-6.5 rounded-[50px] '>
        <h3 className='text-[#fe5d42] text-[1.5rem] mb-10 '>{productDetails.title}</h3>
        <p className= 'w-68 text-gray-500 md:w-125 text-[1.1rem] mb-10 '>{productDetails.description}</p> 
        <p className='mb-2.5 flex'> <SiOpenproject className='text-[#fe5d42] mr-2.5 mt-1'/> {productDetails.category}</p>
        <div className='flex justify-between'>
          <span className='flex'> 
            <IoMdPricetag className='text-[#fe5d42] mr-2.5 mt-1'/> {productDetails.price} $
          </span>
          <Link className='flex items-center bg-[#fe5d42] p-[5px_10px] text-[#fff] rounded-xl ' to="/products">
            <FaArrowLeft className='mr-2.5 text-[#fff]'/> 
            <span className='text-[#fff]'>
             Back to Shop
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage