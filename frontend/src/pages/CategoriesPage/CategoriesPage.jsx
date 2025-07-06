import React, { useEffect } from "react";
import Title from "../../ui/Title/Title";
import Breadcrumbs from "../../ui/Breadcrumbs/Breadcrumbs";
import ErrorInfo from "../../components/ErrorInfo/ErrorInfo";
import CategoriesCard from "../../components/CategoriesCard/CategoriesCard";
import ListCards from "../../components/ListCards/ListCards";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories } from "../../utils/redux/slices/categoriesSlice";

const CategoriesPage = () => {
  const { data, loading, error } = useSelector((store) => store.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchAllCategories());
    }
  }, [data.length, dispatch]);

  if (error) {
    return <ErrorInfo />;
  }

  return (
    <div className="mb-14 md:mb-28">
      <Breadcrumbs />
      <Title className="mb-[var(--m-bottom-title-xs)] md:mb-[var(--m-bottom-title-md)]">
        Categories
      </Title>
      <ListCards loading={loading} skeletonCount={8}>
        {data.map((category) => (
          <CategoriesCard key={category.id} {...category} />
        ))}
      </ListCards>
    </div>
  );
};

export default CategoriesPage;
