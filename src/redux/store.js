import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';

const store = configureStore({
    reducer: {
        cartReducer: cartSlice.reducer, // Naming reducer as `cartReducer`
    },
});

export default store;
