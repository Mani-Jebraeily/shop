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

const useProductDetails=(id)=>{
  const products= useContext(ProductContext)
  const result=products.find((p)=>p.id===id)
  return result


}

export default ProductsContext
export {useProducts,useProductDetails}