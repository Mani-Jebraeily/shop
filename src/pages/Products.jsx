import React, { useEffect, useState } from 'react'
import api from '../services/config'
import { useProducts } from '../context/ProductsContext'
import Card from '../components/Card'
import {BarLoader } from 'react-spinners'
import { ImSearch } from 'react-icons/im'
import { FaListUl } from 'react-icons/fa'

function Products() {
  const products=useProducts()
  const [search,setSearch]=useState("")

  const searchHandeler=()=>{
    console.log("search")
  }

  const categoryHandeler=(event)=>{
    const {tagName}=event.target
    const category=event.target.innerText.toLowerCase()
    console.log(category)
    if(tagName!=="LI"){
      return
    }


  }
  return (
    <>
    <div>
      <input type="text" placeholder='Search...' value={search} onChange={(e)=>setSearch(e.target.value.toLowerCase().trim())}/>
      <button className='bg-red-900 cursor-pointer' onClick={searchHandeler}><ImSearch/></button>
    
    </div>

     <div className='flex justify-between'> 
        <div className='w-[100%] flex flex-wrap justify-between justify -center items-center'> 
          {!products.length&&(
            <div className='h-100 w-[100%] text-center mt -25 m-auto grid place-items-center '>
              <BarLoader />
             </div> 
          )}
          <div className='flex  flex-row flex-wrap  gap-y-5 gap-x-3 justify-around '>
            {products.map((p)=>(<Card key={p.id} data={p}/>))}
             
          </div>
        </div>
       
        <div>
            <div className='flex items-center'>
              <FaListUl/>
              <p>Categories</p>
            </div>
            <ul onClick={categoryHandeler}>
              <li>All</li>
              <li>Electronics</li>
              <li>Jewelery</li>
              <li>Men's Clothing</li>
              <li className='flex flex-nowrap'>Women's Clothing</li>
            </ul>
        </div>
     </div>
    
    </>

  )
}

export default Products