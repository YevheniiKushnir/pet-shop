export const selectDiscountedProducts = (state) => {
  return state.products.data.filter(
    (product) => product.discont_price !== null
  );
};
