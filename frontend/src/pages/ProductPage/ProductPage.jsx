import React, { useEffect, useState } from "react";
import BreadCrumbs from "../../ui/BreadCrumbs/BreadCrumbs";
import Title from "../../ui/Title/Title";
import {
  fetchProductById,
  setCurrentProduct,
} from "../../utils/redux/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getIdFromSlug } from "../../utils/slugify";
import { getDiscountPercent, priceFormatting } from "../../utils/price";
import CartButton from "../../ui/CartButton/CartButton";
import Button from "../../ui/Button/Button";
import ProductDescription from "../../ui/ProductDescription/ProductDescription";

const current = {
  id: 2,
  title: "GranataPet Mini Royal Poultry, Dry Food for Dogs",
  price: 26,
  discont_price: 15,
  description:
    "Really delicious: The dry dog food for small breeds up to 10 kg allows a natural diet of your four-legged friend, is completely tailored to his needs, grain-free and made without artificial additives. Only the best ingredients: the food with high-quality muscle meat and offal is easy to digest and provides your fur nose with valuable oils, important vitamins, nutrients and essential fatty acids. Enjoy grain-free: the dry food is a complete food for small dog breeds and does not use grains, sugar additives, artificial colours, flavours and preservatives in all varieties. The plus of nature: the dry food is rich in natural vitamins, nutrients and antioxidants thanks to green-lipped mussel and pomegranate seeds that can support the heart, circulation, cells and immune system.",
  image: "http://localhost:3333/product_img/2.jpeg",
  createdAt: "2022-10-02T14:43:29.000Z",
  updatedAt: "2022-10-02T14:43:29.000Z",
  categoryId: 1,
};

const ProductPage = () => {
  const dispatch = useDispatch();
  const { productSlug } = useParams();
  const [sale, setSale] = useState(null);

  // useEffect(() => {
  //   if (current.discont_price && current.price) {
  //     setSale(getDiscountPercent(current.price, current.discont_price));
  //   }
  // }, [current]);

  // const {
  //   data: products,
  //   current: PPP,
  //   loading,
  //   error,
  // } = useSelector((store) => store.products);

  // useEffect(() => {
  //   const id = getIdFromSlug(productSlug);

  //   if (!products.length) {
  //     dispatch(fetchProductById(id));
  //   } else {
  //     const product = products.find((p) => p.id === id);
  //     if (product) {
  //       dispatch(setCurrentProduct(product));
  //     }
  //   }
  // }, [products, productSlug, dispatch]);

  return (
    <div className="mb-10 lg:mb-20">
      <BreadCrumbs />

      <div className="flex flex-col lg:flex-row lg:gap-8 w-full items-start">
        <div className="flex flex-col xl:flex-row md:gap-4 w-full lg:w-[55%] mb-4 md:mb-8">
          <img
            className="w-full aspect-square rounded-xl object-contain xl:order-1 md:max-h-[500px] lg:max-h-none"
            src={current.image}
            alt="product-main"
          />

          <div className="flex xl:flex-col gap-4 w-full lg:w-auto justify-center">
            {[1, 2, 3].map((_, i) => (
              <img
                key={i}
                className="w-[30%] lg:w-auto aspect-square rounded-xl object-contain max-h-[180px] lg:max-h-[150px] xl:max-h-[200px]"
                src={current.image}
                alt={`product-preview-${i}`}
              />
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[45%] flex flex-col gap-6 items-center lg:items-start">
          <h2 className="font-bold text-[24px] md:text-[40px] text-center lg:text-left">
            {current.title}
          </h2>

          <div className="relative flex items-end w-max">
            <span className="font-bold text-[36px] md:text-[64px] leading-none mr-4 lg:mr-8">
              {priceFormatting(current.discont_price)}
            </span>
            <span className="text-[24px] md:text-[40px] text-main-grey line-through leading-tight mr-2 lg:mr-4">
              {priceFormatting(current.price)}
            </span>
            <span className="self-start px-2 py-1 bg-main-blue text-white rounded-md text-sm md:text-base">
              {`-${17}%`}
            </span>
          </div>

          <div className="flex w-full flex-col lg:flex-row gap-4 lg:gap-8 items-center">
            <CartButton />
            <Button className="w-full md:max-w-[300px]">Add to cart</Button>
          </div>

          <ProductDescription text={current.description} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
