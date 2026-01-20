import cartReducer from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    // user: userSlice
  },
});

export default appStore;
