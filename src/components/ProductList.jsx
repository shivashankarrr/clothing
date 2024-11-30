import React from 'react'
import { FaCirclePlus,FaCircleMinus } from "react-icons/fa6";



function ProductList(props) {
    const {filteredSortedGroupByArr} = props
  return (
    <div>
        <ul className='flex flex-row flex-wrap list-none'>
          {filteredSortedGroupByArr.length === 0 ? <h1 className='self-center'>...Loading</h1>:
          filteredSortedGroupByArr.map((eachProduct)=>{
              return (<li key={eachProduct.id} className='bg-white w-60 flex flex-col justify-center items-center p-6'>
                  <img src={eachProduct.image} alt="product image" className='max-w-40 h-40'/>
                  
                  <p className='text-xs'>{eachProduct.title}</p>
                  <p><span className='text-xl'>${eachProduct.price}</span></p>
                  <div className='flex'>
                    <FaCircleMinus className='text-xl cursor-pointer'/>
                    <div className='px-1'>0</div>
                    <FaCirclePlus className='text-xl cursor-pointer'/>
                  </div>
                  {/* <p>Description:{eachProduct.description}</p> */}
                  {/* <p>Rating: <span className='text-green-600 font-bold'>{eachProduct.rating.rate}</span> {eachProduct.rating.count}</p> */}
              </li>)
          })}
      </ul>
    </div>  
  )
}

export default ProductList