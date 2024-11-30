import React from 'react'

function Categories(props) {
    const {category,setCurrentCategory,setPageNum} = props
  return (
    <>
      {category && category.length > 0 ? (
  category.map((eachCategory) => {
      return (
          <button key={eachCategory} className="mx-4 border-2 rounded-md border-black px-4" onClick={() => {setCurrentCategory(eachCategory)
            setPageNum(1)}
          }>
              {eachCategory}
          </button>
      );
  })
) : ""}</>
  )
}

export default Categories