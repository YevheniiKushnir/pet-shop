import { createSelector } from "@reduxjs/toolkit";

const selectAllProducts = (state) => state.products.data;

export const selectDiscountedProducts = createSelector(
  [selectAllProducts],
  (products) => products.filter((product) => product.discont_price !== null)
);

export const selectVisibleRandomDiscountedProducts = (count = 4) =>
  createSelector([selectDiscountedProducts], (discounted) => {
    const shuffled = [...discounted].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  });
