import React from 'react'
import { useState,useEffect } from 'react'
import Categories from './Categories'
import ProductSearch from './productSearch'
import ProductList from './ProductList'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

function Home() {
  const [products,setProducts] = useState([])
  const [search,setSearch] = useState('')
  const [sortDir,setSortDir] = useState(0)
  const [category,setCategory] = useState([])
  const [currentCategory,setCurrentCategory] = useState('All Categories')
  const [pageSize,setPageSize] = useState(4)
  const [pageNum,setPageNum] = useState(3)

  useEffect(() =>{
      const fetchData = async () =>{
          const response = await fetch("https://fakestoreapi.com/products")
          const data = await response.json()
          setProducts(data)
      }
      fetchData();
  },[])

  useEffect(()=>{
      const fetchCategories = async ()=>{
          const response = await fetch("https://fakestoreapi.com/products/categories")
          const categoriesData = await response.json()
          setCategory(["All Categories", ...categoriesData])
          console.log(categoriesData)
      }
      fetchCategories()
  },[])

  const inComperator = (product1,product2) =>{
      if (product1.price > product2.price){
          return 1
      }else{
          return -1
      }
  }

  const deComperator = (product1,product2)=>{
      if(product1.price < product2.price){
          return 1
      }else{
          return -1
      }
  }


  let filteredArr = products
      if(search != ""){
          filteredArr = filteredArr.filter((product)=>{
              return product.title.toLowerCase().includes(search.toLowerCase())
          })
      }

      let filteredSortedArr = filteredArr;
      if(sortDir != 0){
          if (sortDir == 1){
               filteredSortedArr.sort(inComperator)
          }else{ 
               filteredSortedArr.sort(deComperator)
          }
      }

      let filteredSortedGroupByArr = filteredSortedArr;
      if (currentCategory != "All Categories"){
          filteredSortedGroupByArr = filteredSortedGroupByArr.filter((products)=>{
              return products.category == currentCategory
          })
      }

//   pagination starts from here
let startIndex = (pageNum - 1) * pageSize
let endIndex = startIndex + pageSize
let totalPages = filteredSortedGroupByArr.length/pageSize

filteredSortedGroupByArr = filteredSortedGroupByArr.slice(startIndex,endIndex)

  
  
    return (
      <>
  <div className='bg-black text-white flex flex-row justify-center self-center p-5'>
<Categories category={category} setCurrentCategory={setCurrentCategory}></Categories>
<ProductSearch search={search} setSearch={setSearch}></ProductSearch>
  </div>
      <ProductList filteredSortedGroupByArr={filteredSortedGroupByArr}></ProductList>
      {/* pagination  */}
      <div className='flex flex-row justify-center'>
        <button type="button" onClick={()=>{
            if (pageNum > 1){
                return  setPageNum(pageNum-1)
        }else{
            return setPageNum(1)
        }
    }
        }><FaAngleLeft fontSize="large"></FaAngleLeft></button>
        <p>{pageNum}</p>
        <button type="button" onClick={()=>{
            if (pageNum < totalPages){
                return setPageNum(pageNum+1)
            }else{{
                return totalPages
            }}
        }}><FaAngleRight fontSize="large"></FaAngleRight></button>
      </div>
      </>
    )
}

export default Home