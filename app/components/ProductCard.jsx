import React from 'react'

const ProductCard = ({ imgSrc, productName, productPrice }) => {
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
          <button className="secondary-bg px-4 py-2 rounded-xl mt-3 cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard