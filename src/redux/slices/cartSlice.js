import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        cartQuantity: 0,
        // array of objects -> {details of the product, individual quantity of each}
        cartProducts: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartQuantity++;
            // The product being added from the product list component
            const productToBeAdded = action.payload;

            // Check if the product already exists in the cart
            const productIndex = state.cartProducts.findIndex(
                (cProduct) => cProduct.id === productToBeAdded.id
            );

            if (productIndex === -1) {
                // If not present, add it with `indQuantity` set to 1
                state.cartProducts.push({ ...productToBeAdded, indQuantity: 1 });
            } else {
                // If already present, create a new object with updated quantity
                state.cartProducts[productIndex] = {
                    ...state.cartProducts[productIndex],
                    indQuantity: state.cartProducts[productIndex].indQuantity + 1
                };
            }
        },
        deleteFromCart: (state, action) => {
            const productToBeRemoved = action.payload;

            // Find the index of the product to be removed
            const productIndex = state.cartProducts.findIndex(
                (cProduct) => cProduct.id === productToBeRemoved.id
            );

            if (productIndex !== -1) {
                const product = state.cartProducts[productIndex];

                if (product.indQuantity > 1) {
                    // Decrease the product's quantity
                    state.cartProducts[productIndex] = {
                        ...product,
                        indQuantity: product.indQuantity - 1
                    };
                } else {
                    // Remove the product if quantity reaches 0
                    state.cartProducts.splice(productIndex, 1);
                }

                state.cartQuantity--; // Update the total cart quantity
            }
        },
    }
});

export const action = cartSlice.actions;

export default cartSlice;
