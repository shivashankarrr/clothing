import React from 'react'

function productSearch(props) {
    const {search,setSearch,setPageNum} = props
  return (
    <div><label htmlFor="search" className='sr-only'>Search:</label>
    <input
      id="search"
      type="text"
      placeholder="Search"
      className="rounded-md border-solid  border-2 outline-none text-black"
      value={search}
      onChange={(e) => {setSearch(e.target.value)
        setPageNum(1)}
      }
      
    /></div>
  )
}

export default productSearch