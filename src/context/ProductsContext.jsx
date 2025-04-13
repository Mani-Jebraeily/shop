import React, { Children, createContext, useContext, useEffect, useState } from 'react'
import api from '../services/config'

const ProductContext=createContext()

function ProductsContext({children}) {
    const [products,setProducts]=useState([])

    useEffect(()=>{
        api.get("products").then((res)=>setProducts(res))
    },[])
  return (
    <ProductContext.Provider value={products}>
        {children}
    </ProductContext.Provider>
  )
}

const useProducts=()=>{
    const products= useContext(ProductContext)
    return products
}

export default ProductsContext
export {useProducts}