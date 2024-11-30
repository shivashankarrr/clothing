import React from 'react'
import { useState,useEffect } from 'react'
import Categories from '../components/Categories'
import ProductSearch from '../components/productSearch'
import ProductList from '../components/ProductList'
import basicOps from '../utilities/basicOps'
import { FaAngleLeft } from "react-icons/fa";
import { FaArrowAltCircleUp,FaArrowAltCircleDown } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { usePaginationContext } from '../contexts/PaginationContext'

function Home() {
    // single source of truth for all the products
  const [products,setProducts] = useState([])
//    used to search the products
  const [search,setSearch] = useState('')
//   0:products not arranged, 1:products in ascending order, -1: Products are in descending order
  const [sortDir,setSortDir] = useState(0)
//   Products are divided into different categories
  const [category,setCategory] = useState([])
//   Changing the categories by default set to all categories
  const [currentCategory,setCurrentCategory] = useState('All Categories')

  const { pageSize,pageNum,
    setPageNum,
    setPageSize } = usePaginationContext();



   // fetching products from fakestore API
   useEffect(() =>{
    const fetchData = async () =>{
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        setProducts(data)
    }
    fetchData();
},[])


// Fetching Categories from fakestore API
useEffect(()=>{
    const fetchCategories = async ()=>{
        const response = await fetch("https://fakestoreapi.com/products/categories")
        const categoriesData = await response.json()
        setCategory(["All Categories", ...categoriesData])
    }
    fetchCategories()
},[])

    const object = basicOps(currentCategory,sortDir,search,products,pageNum,pageSize)
    const filteredSortedGroupByArr = object.filteredSortedGroupByArr
    const totalPages = object.totalPages
  
    return (
      <>
  <div className='bg-black text-white flex flex-row justify-center self-center p-5'>
<Categories category={category} setCurrentCategory={setCurrentCategory}></Categories>
<ProductSearch search={search} setSearch={setSearch}></ProductSearch>
<div className='flex flex-row items-center mx-4'>
        <FaArrowAltCircleUp className='text-xl cursor-pointer text-white' onClick={()=>setSortDir(1)}/>
        <FaArrowAltCircleDown className='text-xl cursor-pointer text-white'onClick={()=>setSortDir(-1)}/>

        </div>
  </div>
      <ProductList filteredSortedGroupByArr={filteredSortedGroupByArr}></ProductList>
      {/* pagenation starts here */}
      <div className='flex flex-row justify-center m-10'>
        <button onClick={()=>{
            if (pageNum > 1){
                setPageNum(pageNum => pageNum - 1)}
            
        }}
        disabled = {pageNum == 1 ? true : false}
        type='button'
        className='bg-slate-300 rounded h-8'
        ><FaAngleLeft></FaAngleLeft></button>
        <p className='mx-2'>{pageNum}</p>
        <button onClick={()=>{
            if (pageNum < totalPages){
                setPageNum(pageNum => pageNum + 1)   }         
        }}
        disabled = {pageNum == totalPages ? true : false}
        type='button'
        className='bg-slate-300 rounded h-8'
        ><FaAngleRight></FaAngleRight></button>
      </div>
      </>
    )
}

export default Home