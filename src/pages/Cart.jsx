import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { action } from '../redux/slices/cartSlice'; // Actions for cart operations
import { FaCircleMinus, FaCirclePlus } from 'react-icons/fa6';

function Cart() {
  // Access cartProducts from Redux store
  const cartProducts = useSelector((state) => state.cartReducer.cartProducts);
  const dispatch = useDispatch();

  // Handle adding product to the cart
  const handleAddProduct = (product) => {
    dispatch(action.addToCart(product));
  };

  // Handle removing product from the cart
  const handleRemoveProduct = (product) => {
    dispatch(action.deleteFromCart(product));
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    return cartProducts.reduce((total, product) => {
      return total + product.price * product.indQuantity;
    }, 0);
  };

  return (
    <div className="cart-page">
      {cartProducts.length === 0 ? (
        <h1 className='flex justify-center items-center text-4xl'>Your cart is empty!</h1>
      ) : (
        <div className="cart-items">
          <ul>
            {cartProducts.map((product) => (
              <li key={product.id} className="cart-item">
                <img
                  src={product.image}
                  alt={product.title}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3>{product.title}</h3>
                  <p>Price: ${product.price}</p>
                  <div className="flex items-center">
                    <FaCircleMinus
                      className="text-2xl cursor-pointer"
                      onClick={() => handleRemoveProduct(product)}
                    />
                    <div className="px-2">{product.indQuantity}</div>
                    <FaCirclePlus
                      className="text-2xl cursor-pointer"
                      onClick={() => handleAddProduct(product)}
                    />
                  </div>
                  <p>Total Price: ${(product.price * product.indQuantity).toFixed(2)}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h2>Total: ${calculateTotalPrice().toFixed(2)}</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
