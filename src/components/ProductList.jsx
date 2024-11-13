import React from 'react'

function ProductList(props) {
    const {filteredSortedGroupByArr} = props
  return (
    <div>
        <ul className='flex flex-row flex-wrap list-none'>
          {filteredSortedGroupByArr.length === 0 ? <h1 className='self-center'>...Loading</h1>:
          filteredSortedGroupByArr.map((eachProduct)=>{
              return (<li key={eachProduct.id} className='bg-white w-60 flex flex-col justify-center items-center p-6'>
                  <img src={eachProduct.image} alt="product image" className='w-40'/>
                  <p>{eachProduct.title}</p>
                  <p>Price : ${eachProduct.price}</p>
                  {/* <p>Description:{eachProduct.description}</p> */}
                  <p>Rating: <span className='text-green-600 font-bold'>{eachProduct.rating.rate}</span> {eachProduct.rating.count}</p>
              </li>)
          })}
      </ul>
    </div>  
  )
}

export default ProductList