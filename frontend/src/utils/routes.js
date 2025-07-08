export const ROUTES = {
  MAIN: "/",
  CATEGORIES: "/categories",
  PRODUCTS: "/products",
  SALES: "/discounted-items",
  CART: "/cart",
};

export const LINKS = [
  { to: ROUTES.MAIN, label: "Main Page" },
  { to: ROUTES.CATEGORIES, label: "Categories" },
  { to: ROUTES.PRODUCTS, label: "All products" },
  { to: ROUTES.SALES, label: "All sales" },
];

export const getLinkFromRoute = (route) => {
  return LINKS.find((link) => link.to === route);
};
