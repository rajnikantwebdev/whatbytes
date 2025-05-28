"use client"
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import Link from 'next/link'

const ProductListing = () => {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("/data.json").then((res) =>  res.json()).then((data) =>  {
            setProducts(data)
            setTimeout(() => {
                setLoading(false);
            }, 1000) 
        }).catch(err => console.log("error while fetchign data!"))
    }, [])
  return (
    <div className="flex justify-end  w-full items-end">
      <div className=" grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-28 ">
        {products !== null &&
          products.map((product, index) => (
            <Link key={index} href={`/product/${index}`}>
              <ProductCard
                key={index}
                imgSrc={product.imageSrc}
                productName={product.productName}
                productPrice={product.productPrice}
                productRatings={product.productRatings}
                loading={loading}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default ProductListing