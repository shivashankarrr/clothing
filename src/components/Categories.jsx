import React from 'react'

function Categories(props) {
    const {category,setCurrentCategory} = props
  return (
    <>
      {category && category.length > 0 ? (
  category.map((eachCategory) => {
      return (
          <button key={eachCategory} className="mx-4 border-2 rounded-md border-black px-4" onClick={() => setCurrentCategory(eachCategory)}>
              {eachCategory}
          </button>
      );
  })
) : ""}</>
  )
}

export default Categories