import React from 'react'

function Categories(props) {
    const {category,setCurrentCategory,setPageNum} = props
  return (
    <div className='flex-wrap'>
      {category && category.length > 0 ? (
  category.map((eachCategory) => {
      return (
          <button key={eachCategory} className="mx-4 border-2 rounded-md border-black px-4 border-solid border border-slate-500" onClick={() => {setCurrentCategory(eachCategory)
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