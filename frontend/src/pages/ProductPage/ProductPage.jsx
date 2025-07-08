import React, { useEffect } from "react";
import BreadCrumbs from "../../ui/BreadCrumbs/BreadCrumbs";
import Title from "../../ui/Title/Title";
import {
  fetchAllProducts,
  fetchProductById,
} from "../../utils/redux/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAllCategories } from "../../utils/redux/slices/categoriesSlice";
import { getValueBySlug, slugify } from "../../utils/slugify";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { slug, productSlug } = useParams();
  const {
    data: categories,
    loading: catLoading,
    error: catError,
  } = useSelector((store) => store.categories);

  const {
    data: products,
    current: currentProduct,
    loading: prodLoading,
    error: prodError,
  } = useSelector((store) => store.products);

  useEffect(() => {
    if (!categories.length) {
      dispatch(fetchAllCategories());
    }

    if (!products.length) {
      dispatch(fetchAllProducts());
    }
  }, [categories.length, products.length, dispatch]);

  useEffect(() => {
    if (products.length) {
      const product = products.find((p) => slugify(p.title) === productSlug);
    }
  }, [categories, products, slug, productSlug, dispatch]);

  return (
    <div className="mb-10 md:mb-20">
      <Title></Title>
    </div>
  );
};

export default ProductPage;
