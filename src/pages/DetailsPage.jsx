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
    <div className='flex items-start min-h-[1000px] w-[100%]'>
      <img className='w-75 p-[15px_25px] bg-[#fff] border-[2px] border-dashed border-[#fe5d42] rounded-[50px] m-2.5 mr-[50px]' src={productDetails.image} alt={productDetails.title} />
      <div className='w-[100%] border-[2px] border-dashed border-[#e2e2e2] m-2.5 p-6.5 rounded-[50px] '>
        <h3 className='text-[#fe5d42] text-[1.5rem] mb-10 '>{productDetails.title}</h3>
        <p className='text-gray-500 w-125 text-[1.1rem] mb-10  '>{productDetails.description}</p> 
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