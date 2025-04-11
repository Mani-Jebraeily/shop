import React, { useEffect } from 'react'
import axios from 'axios'
import api from '../services/config'
function Products() {
    useEffect(()=>{
        api.get("/products").then((res)=>{console.log(res)})
    },[])
  return (
    <div>Products</div>
  )
}

export default Products