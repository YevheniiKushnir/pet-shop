import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice";
import productsReducer from "./slices/productsSlice";
import orderReducer from "./slices/orderSlice";
import saleReducer from "./slices/saleSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    order: orderReducer,
    sale: saleReducer,
  },
});

export default store;
