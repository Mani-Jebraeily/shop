import React, { useEffect } from 'react'
import axios from 'axios'
import api from '../services/config'
import { useProducts } from '../context/ProductsContext'
import Card from '../components/Card'
function Products() {
  const products=useProducts()
  console.log(products)
  return (
     <div className='flex justify-between'> 
        <div className='w-[100%] flex flex-wrap justify-between'> 
          {!products.length&&(<p>!Loading</p>)}
          {products.map((p)=>(<Card key={p.id} data={p}/>))}
        </div>
   
        <div>side bar</div>
     </div>
  )
}

export default Products