import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../utils/redux/slices/productsSlice";
import BreadCrumbs from "../../ui/BreadCrumbs/BreadCrumbs";
import Title from "../../ui/Title/Title";
import FilterSection from "../../components/FilterSection/FilterSection";
import { getLinkFromRoute, ROUTES } from "../../utils/routes";
import filterAndSortProducts from "../../utils/filterAndSortProducts";
import ErrorInfo from "../../components/ErrorInfo/ErrorInfo";
import ListCards from "../../components/ListCards/ListCards";
import ProductCard from "../../components/ProductCard/ProductCard";
import { SORT_OPTIONS } from "../../utils/sortOptions";

const DiscountsPage = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.products);
  const titleOfPage = getLinkFromRoute(ROUTES.SALES).specLabel;

  useEffect(() => {
    if (!data.length) {
      dispatch(fetchAllProducts());
    }
  });

  // FILTER AND SORT BY
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [discountOnly, setDiscountOnly] = useState(true);
  const [sortOption, setSortOption] = useState(SORT_OPTIONS[0]);

  const filteredData = useMemo(() => {
    return filterAndSortProducts({
      products: data,
      priceFrom,
      priceTo,
      discountOnly,
      sortOption,
    });
  }, [data, priceFrom, priceTo, discountOnly, sortOption]);

  return (
    <div className="mb-10 md:mb-20">
      <BreadCrumbs />
      <Title>{titleOfPage}</Title>
      <FilterSection
        priceFrom={priceFrom}
        setPriceFrom={setPriceFrom}
        priceTo={priceTo}
        setPriceTo={setPriceTo}
        discountOnly={discountOnly}
        setDiscountOnly={setDiscountOnly}
        sortOption={sortOption}
        setSortOption={setSortOption}
        hiddenCheckbox={true}
      />
      {error ? (
        <ErrorInfo />
      ) : (
        <ListCards loading={loading} skeletonCount={8}>
          {filteredData.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </ListCards>
      )}
    </div>
  );
};

export default DiscountsPage;
