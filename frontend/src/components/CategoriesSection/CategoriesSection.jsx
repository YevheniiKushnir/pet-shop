import Title from "../../ui/Title/Title";
import Divider from "../../ui/Divider/Divider";
import CrumbButton from "../../ui/Breadcrumbs/CrumbButton/CrumbButton";
import CategoriesCard from "../CategoriesCard/CategoriesCard";
import ListCards from "../ListCards/ListCards";
import ErrorInfo from "../ErrorInfo/ErrorInfo";
import { fetchAllCategories } from "../../utils/redux/slices/categoriesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ROUTES } from "../../utils/routes";

const CategoriesSection = () => {
  const { data, loading, error } = useSelector((store) => store.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  if (error) {
    return <ErrorInfo />;
  }

  return (
    <section>
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-[var(--m-bottom-title-xs)] md:mb-[var(--m-bottom-title-md)]">
        <Title>Categories</Title>
        <div className="flex w-full items-center">
          <Divider />
          <CrumbButton to={ROUTES.CATEGORIES}>All categories</CrumbButton>
        </div>
      </div>
      <ListCards loading={loading} skeletonCount={8}>
        {data.slice(0, 4).map((category) => (
          <CategoriesCard key={category.id} {...category} />
        ))}
      </ListCards>
    </section>
  );
};

export default CategoriesSection;
