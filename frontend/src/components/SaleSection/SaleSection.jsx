import React, { useEffect, useMemo } from "react";
import TitleWithCrumbButton from "../../ui/TitleWithCrumbButton/TitleWithCrumbButton";
import ListCards from "../ListCards/ListCards";
import ProductCard from "../ProductCard/ProductCard";
import { ROUTES } from "../../utils/routes";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../utils/redux/slices/productsSlice";
import { selectVisibleRandomDiscountedProducts } from "../../utils/redux/selectors";

const SaleSection = () => {
  const { data, loading, error } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data.length) {
      dispatch(fetchAllProducts());
    }
  }, [dispatch, data.length]);

  const visibleItems = 4;
  const randomDiscountedSelector = useMemo(
    () => selectVisibleRandomDiscountedProducts(visibleItems),
    [visibleItems]
  );
  const randomDiscounted = useSelector(randomDiscountedSelector);

  return (
    <section>
      <TitleWithCrumbButton
        title={"Sale"}
        to={ROUTES.SALES}
        buttonTitle={"All sales"}
      />
      {error ? (
        <ErrorInfo />
      ) : (
        <ListCards loading={loading} skeletonCount={4}>
          {randomDiscounted.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </ListCards>
      )}
    </section>
  );
};

export default SaleSection;
