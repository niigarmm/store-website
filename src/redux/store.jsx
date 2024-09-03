import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
let store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
export default store;