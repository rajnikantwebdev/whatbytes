"use client"
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const ProductListing = () => {
    const [products, setProducts] = useState(null)
    useEffect(() => {
        fetch("/data.json").then((res) =>  res.json()).then((data) =>  setProducts(data))
    }, [])
    console.log("products", products)
  return (
    <div className="flex justify-end  w-full items-end">
      <div className=" grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-28 ">
        {products !== null &&
          products.map((product, index) => (
            <ProductCard
              key={index}
              imgSrc={product.imageSrc}
              productName={product.productName}
              productPrice={product.productPrice}
            />
          ))}
      </div>
    </div>
  );
}

export default ProductListing