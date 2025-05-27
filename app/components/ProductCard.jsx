import React from 'react'

const ProductCard = ({ imgSrc, productName, productPrice }) => {
  return (
    <div>
      <div>
        <img src={imgSrc} alt="product Image" />
      </div>
      <div>{productName}</div>
      <div>
        <span>{productPrice}</span>
      </div>
    </div>
  );
};

export default ProductCard