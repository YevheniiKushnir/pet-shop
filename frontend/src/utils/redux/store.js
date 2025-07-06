import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    // products: productsReducer,
    // sales: salesReducer
  },
});

export default store;
