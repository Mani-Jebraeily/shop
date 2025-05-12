import React, { use, useEffect, useState } from 'react'
import api from '../services/config'
import { useProducts } from '../context/ProductsContext'
import Card from '../components/Card'
import {BarLoader } from 'react-spinners'
import { searchProducts,filterProducts, createQueryObject, getInitialQuery } from '../helper/helper'
import { useSearchParams } from 'react-router-dom'
import SearchBox from '../components/SearchBox'
import SideBar from '../components/SideBar'

function Products() {
  const products=useProducts()
  const [displayed,setDisplayed]=useState([])

  const [search,setSearch]=useState("")
  const [query,setQuery]=useState([])
  const [searchParams,setSearchParams]=useSearchParams()

console.log(query)
  useEffect(()=>{
    setDisplayed(products)

    setQuery(getInitialQuery(searchParams))
  },[products])

  useEffect(()=>{
    setSearchParams(query)
    setSearch(query.search || "")

   let finalProducts= searchProducts(products,query.search)
   finalProducts=filterProducts(finalProducts,query.category)
   setDisplayed(finalProducts)
  //  console.log(query)
  },[query])


  return (
    <>
    <SearchBox setSearch={setSearch} search={search} setQuery={setQuery}/>
     <div className='flex justify-between'> 
        <div className='w-[100%] flex flex-wrap justify-between justify -center items-center'> 
          {!displayed.length&&(
            <div className='h-100 w-[100%] text-center  m-auto grid place-items-center '>
              <BarLoader />
             </div> 
          )}
          <div className='flex  flex-row flex-wrap  gap-y-5 gap-x-3 justify-around '>
            {displayed.map((p)=>(<Card key={p.id} data={p}/>))}
          </div>
        </div>
        <SideBar setQuery={setQuery} query={query}/>
     </div>
    
    </>

  )
}

export default Products