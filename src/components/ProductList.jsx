import React from 'react';
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { action } from '../redux/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FaStar } from "react-icons/fa";

function ProductList(props) {
  const { filteredSortedGroupByArr } = props;
  const dispatch = useDispatch();

  // Access cart products from the Redux state
  const cartProducts = useSelector((state) => state.cartReducer.cartProducts);

  const handleAddProduct = (eachProduct) => {
    dispatch(action.addToCart(eachProduct));
  };

  const handleRemoveProduct = (eachProduct) => {
    dispatch(action.deleteFromCart(eachProduct));
  };

  return (
    <div>
      <ul className='flex flex-row justify-center flex-wrap list-none'>
        {filteredSortedGroupByArr.length === 0 ? (
          <h1 className='self-center'>...Loading</h1>
        ) : (
          filteredSortedGroupByArr.map((eachProduct) => {
            // Find the product in the cart and get its indQuantity
            const cartProduct = cartProducts.find(
              (cProduct) => cProduct.id === eachProduct.id
            );
            const productCount = cartProduct ? cartProduct.indQuantity : 0;

            return (
              <li key={eachProduct.id} className='bg-white w-60 flex flex-col p-6'>
                <img
                  src={eachProduct.image}
                  alt="product image"
                  className='max-h-40 overflow-scroll pb-4'
                />

                <p className='text-xs'>{eachProduct.title}</p>
                <div className='flex flex-row justify-between items-center m-1'>
                  <p><span className='text-xl'>${eachProduct.price}</span></p>
                  <p>
                    <span className='text-white font-bold bg-[#0A6AEE] px-2 py-1 mx-2 rounded-md flex items-center'>
                      {eachProduct.rating.rate}
                      <FaStar className='font-bold pl-1 text-lg' />
                    </span>
                  </p>
                </div>

                <div className='flex items-center'>
                  <FaCircleMinus
                    className='text-2xl cursor-pointer'
                    onClick={() => handleRemoveProduct(eachProduct)}
                  />
                  <div className='px-1'>{productCount}</div>
                  <FaCirclePlus
                    className='text-2xl cursor-pointer'
                    onClick={() => handleAddProduct(eachProduct)}
                  />
                </div>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}

export default ProductList;
