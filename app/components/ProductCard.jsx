import React from "react";
import useCartStore from "../utilities/cartStore";

const ProductCard = ({
  imgSrc,
  productName,
  productPrice,
  productRatings,
  loading,
}) => {

  const { addToCart } = useCartStore();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault(); 
    addToCart({ imgSrc, productName, productPrice, productRatings });
  };

  if (loading) {
    return (
      <div className="w-48 shadow-xl bg-white rounded-2xl animate-pulse">
        {/* Skeleton for image */}
        <div className="h-40 w-full rounded-2xl bg-gray-200"></div>
        <div className="px-4 py-4">
          {/* Skeleton for product name */}
          <div className="h-6 w-3/4 bg-gray-200 rounded mb-2"></div>
          {/* Skeleton for price */}
          <div className="h-5 w-1/2 bg-gray-200 rounded mb-3"></div>
          {/* Skeleton for button */}
          <div className="h-10 w-full bg-gray-200 rounded-xl"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-48 w-full shadow-xl bg-white rounded-2xl">
      <div className="h-40 bg-white w-full rounded-2xl">
        <img
          src={imgSrc}
          alt="product Image"
          className="h-full w-full object-contain rounded-2xl"
        />
      </div>
      <div className="px-4 py-4">
        <div>
          <span className="text-black font-bold text-lg">{productName}</span>
        </div>
        <div>
          <span className="text-black font-bold">$ {productPrice}</span>
        </div>
        <div>
          <button onClick={(e) => handleAddToCart(e)} className="secondary-bg px-4 py-2 rounded-xl my-3 cursor-pointer">
            Add to Cart
          </button>
        </div>
        <div >
          <p className="text-yellow-500 text-xl">{"★".repeat(productRatings)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
