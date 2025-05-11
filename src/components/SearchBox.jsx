import React from 'react'
import { ImSearch } from 'react-icons/im'
import { createQueryObject } from '../helper/helper'


 

function SearchBox({search,setSearch,setQuery}) {

    const searchHandeler=()=>{
        setQuery((query)=>createQueryObject(query,{search}))
      }

  return (
        <div>
          <input type="text" placeholder='Search...' value={search} onChange={(e)=>setSearch(e.target.value.toLowerCase().trim())}/>
          <button className='bg-red-900 cursor-pointer' onClick={searchHandeler}><ImSearch/></button>
        </div>
  )
}

export default SearchBox