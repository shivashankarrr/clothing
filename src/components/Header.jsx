

import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import {useSelector} from 'react-redux'

const Header = (props) => {
  const quantity = useSelector((store) =>{return store.cartReducer.cartQuantity})
  return (
    <nav className="bg-black flex justify-between items-center">
      {/* Center-aligned links */}
      <ul className="flex flex-row justify-center flex-grow text-white font-bold font-sans">
        <Link to="/" className="px-5"><li>Home</li></Link>
        <Link to="/user" className="px-5"><li>Users</li></Link>
      </ul>

      {/* Cart icon at the far right */}
      <div className='flex relative'>
      <span className="absolute top-0 right-2 bg-black text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">{quantity}
        </span>
      <Link to="/cart" className="p-5 text-white">
        <FaShoppingCart size={24} />
      </Link>
      
      </div>
    </nav>
  );
};

export default Header;
