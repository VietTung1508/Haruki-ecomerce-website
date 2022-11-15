import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../components/Products/components/ProductSlice";
import cartReducer from "../pages/Cart/CartSlice";

const store = configureStore({
  reducer: {
    setProduct: productReducer,
    cart: cartReducer,
  },
});

export default store;
