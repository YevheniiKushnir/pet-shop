export function getDiscountPercent(price, discountPrice) {
  if (!price || price <= 0 || discountPrice >= price) return 0;

  const discount = ((price - discountPrice) / price) * 100;
  return Math.round(discount);
}

export function priceFormatting(price) {
  return `$${price}`;
}
