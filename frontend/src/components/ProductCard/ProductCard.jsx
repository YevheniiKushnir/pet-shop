import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROUTES } from "../../utils/routes";
import { slugify } from "../../utils/slugify";
import Button from "../../ui/Button/Button";

function getDiscountPercent(price, discountPrice) {
  if (!price || price <= 0 || discountPrice >= price) return 0;

  const discount = ((price - discountPrice) / price) * 100;
  return Math.round(discount);
}
function priceFormatting(price) {
  return `$${price}`;
}

const ProductCard = React.memo(
  ({ image, title, categoryId, price, discont_price }) => {
    const [sale, setSale] = useState(null);
    const categories = useSelector((state) => state.categories.data);

    const category = categories.find((cat) => cat.id === categoryId);
    const categorySlug = category ? slugify(category.title) : "unknown";
    const productSlug = slugify(title);

    const productLink = `${ROUTES.CATEGORIES}/${categorySlug}/${productSlug}`;

    useEffect(() => {
      if (discont_price && price) {
        setSale(getDiscountPercent(price, discont_price));
      }
    }, [price, discont_price]);

    return (
      <Link
        to={productLink}
        className="transition-transform duration-300 hover:scale-105 hover:-translate-y-2 active:scale-105 active:-translate-y-2 w-full flex flex-col rounded-xl relative gap-4 group  border border-light-grey"
      >
        <img
          src={image}
          alt={title}
          className="h-[200px] md:h-[280px] object-contain object-center border-b border-light-grey"
        />
        <div className="px-4 pb-4 md:px-8 md:pb-8 flex flex-col">
          <h3 className="truncate overflow-hidden whitespace-nowrap">
            {title}
          </h3>
          {sale ? (
            <div className="flex items-end">
              <p className="font-semibold text-[40px] mr-4">
                {priceFormatting(discont_price)}
              </p>
              <p className="text-main-grey line-through mb-0.5">
                {priceFormatting(price)}
              </p>
            </div>
          ) : (
            <p className="font-semibold text-3xl md:text-[40px] mr-4">
              {priceFormatting(price)}
            </p>
          )}
        </div>
        {sale && (
          <span className="absolute top-4 right-4 px-2 py-1 bg-main-blue text-main-white rounded-md">
            {`-${sale}%`}
          </span>
        )}
        <Button
          className="absolute top-[140px] md:top-[210px] left-4 right-4 w-auto opacity-100 group-hover:opacity-100 transition-opacity duration-300 z-10 lg:opacity-0"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          Add to cart
        </Button>
      </Link>
    );
  }
);

export default ProductCard;
