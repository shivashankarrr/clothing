import React from 'react'
import {Link} from 'react-router-dom'
import { FaArrowAltCircleUp,FaArrowAltCircleDown } from "react-icons/fa";

const Header = (props) => {
  const {category,setSortDir,search,setCurrentCategory,setSearch} = props;
  return (
    <nav className='bg-black flex flex-row justify-center'>
        <ul className='flex flex-row justify-center text-white font-bold font-sans'>
            <Link to="/" className='p-5'><li>Home</li></Link>
            <Link to='/About' className='p-5'><li>About</li></Link>
            <Link to="/Products" className='p-5'><li>Products</li></Link>
        </ul>
        <div className='flex flex-row justify-center m-5'>
        

        <div className='flex flex-row items-center mx-4'>
        <FaArrowAltCircleUp className='text-xl cursor-pointer' onClick={()=>setSortDir(1)}/>
        <FaArrowAltCircleDown className='text-xl cursor-pointer'onClick={()=>setSortDir(-1)}/>

        </div>
        <div>
        


        </div>
        </div>
    </nav>
  )
}

export default Header