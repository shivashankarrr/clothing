import React from 'react'

function Categories(props) {
    const {category,setCurrentCategory,setPageNum} = props
  return (
    <div className='flex-wrap'>
      {category && category.length > 0 ? (
  category.map((eachCategory) => {
      return (
          <button key={eachCategory} className="mx-1 border-2 rounded-md px-4 my-1 border-solid border border-white" onClick={() => {setCurrentCategory(eachCategory)
            setPageNum(1)}
          }>
              {eachCategory}
          </button>
      );
  })
) : ""}</div>
  )
}

export default Categories