import { FaListUl } from 'react-icons/fa'
import { createQueryObject } from '../helper/helper'
import { categories } from '../constants/list'

function SideBar({setQuery,query}) {

      const categoryHandeler=(event)=>{
        const {tagName}=event.target
        const category=event.target.innerText.toLowerCase()
        setQuery((query)=>createQueryObject(query,{category}))
        if(tagName!=="LI"){
          return
        }
      }
  return (
    <div className='m-auto lg:m-0 '>
    <div className=' w-67.5 sm:w-120  lg:w-50  h-fit md:m-2.5 p-5 sm:ml-7.5 bg-[#fff] border-[2px] border-dashed border-[#e2e2e2] rounded-[20px]'>
        <div className=' w-50 flex items-center mb-2.5 text-[#fe5d42] font-medium'>
          <FaListUl/>
          <p className='ml-2.5'>Categories</p>
        </div>
        <ul onClick={categoryHandeler} className='*:p-[5px] *:cursor-pointer *:hover:text-[#fe5d42] '>
          {categories.map(item=>(<li className={item.type.toLowerCase()===query.category?"bg-[#f7753d49] text-[#fe5d42] rounded-[10px]":null} key={item.id}>{item.type}</li>))}
        </ul>
    </div>
    </div>

  )
}

export default SideBar