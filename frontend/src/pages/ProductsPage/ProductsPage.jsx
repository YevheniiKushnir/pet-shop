import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../utils/redux/slices/productsSlice";
import BreadCrumbs from "../../ui/BreadCrumbs/BreadCrumbs";
import { getLinkFromRoute, ROUTES } from "../../utils/routes";
import Title from "../../ui/Title/Title";
import FilterSection from "../../components/FilterSection/FilterSection";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((store) => store.products);
  const titleOfPage = getLinkFromRoute(ROUTES.PRODUCTS).label;

  useEffect(() => {
    if (!data.length) {
      dispatch(fetchAllProducts());
    }
    console.log(data);
  }, [data.length, dispatch, data]);

  return (
    <div>
      <BreadCrumbs />
      <Title>{titleOfPage}</Title>
      <FilterSection />
    </div>
  );
};

export default ProductsPage;
