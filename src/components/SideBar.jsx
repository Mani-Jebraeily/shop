import { FaListUl } from 'react-icons/fa'
import { createQueryObject } from '../helper/helper'

function SideBar({setQuery}) {

      const categoryHandeler=(event)=>{
        const {tagName}=event.target
        const category=event.target.innerText.toLowerCase()
        setQuery((query)=>createQueryObject(query,{category}))
        if(tagName!=="LI"){
          return
        }
      }
  return (
    <div>
        <div className='flex items-center'>
          <FaListUl/>
          <p>Categories</p>
        </div>
        <ul onClick={categoryHandeler} className='cursor-pointer'>
          <li>All</li>
          <li>Electronics</li>
          <li>Jewelery</li>
          <li>Men's Clothing</li>
          <li className='flex flex-nowrap'>Women's Clothing</li>
        </ul>
    </div>
  )
}

export default SideBar