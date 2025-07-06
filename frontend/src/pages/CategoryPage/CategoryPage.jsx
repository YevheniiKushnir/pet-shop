import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAllCategories,
  fetchCategoryWithProducts,
} from "../../utils/redux/slices/categoriesSlice";
import ListCards from "../../components/ListCards/ListCards.jsx";
import Title from "../../ui/Title/Title";
import Breadcrumbs from "../../ui/Breadcrumbs/Breadcrumbs";
import getValueBySlug from "../../utils/getValueBySlug.js";

const CategoryPage = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error, current } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchAllCategories());
    }
  }, [data.length, dispatch]);

  useEffect(() => {
    if (data.length > 0 && slug) {
      const reqCategory = getValueBySlug(data, slug);

      if (reqCategory) {
        dispatch(fetchCategoryWithProducts(reqCategory.id));
      }
    }
  }, [data, slug, dispatch]);

  return (
    <div>
      <Breadcrumbs />
      <Title className="mb-[var(--m-bottom-title-xs)] md:mb-[var(--m-bottom-title-md)]">
        {current.category.title}
      </Title>

      {/* отрисуй продукты из current.data */}
    </div>
  );
};

export default CategoryPage;
