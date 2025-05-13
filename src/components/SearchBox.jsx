import React from 'react'
import { ImSearch } from 'react-icons/im'
import { createQueryObject } from '../helper/helper'


 

function SearchBox({search,setSearch,setQuery}) {

    const searchHandeler=()=>{
        setQuery((query)=>createQueryObject(query,{search}))
      }

  return (
        <div className='m-10 ml-[10px] flex gap-2 '>
          <input type="text" placeholder='Search...' value={search} onChange={(e)=>setSearch(e.target.value.toLowerCase().trim())} className='border-2 border-dashed border-[#fe5d42] pl-3  w-62.5 h-10 text-[0.9rem] text-#fe5d42 rounded-xl mr-2.5 outline-none'/>
          <button className='size-10 flex items-center justify-center p- 2.5 text-[1rem] bg-[#fe5d42] text-[#fff] border-none rounded-[10px] cursor-pointer' onClick={searchHandeler} ><ImSearch/></button>
        </div>
  )
}

export default SearchBox