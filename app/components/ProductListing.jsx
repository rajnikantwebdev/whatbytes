"use client"
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import Link from 'next/link'
import useProductStore from '../utilities/productStore'
import Filters from './Filters'

const ProductListing = () => {
  const filtersArray = ["all", "electronics", "clothing", "home"];
  const [selectedFilter, setSelectedFilter] = useState(filtersArray[0]);

  const {
    fetchProducts,
    loading,
    error,
    setFilterCategory,
    filteredProducts,
  } = useProductStore();

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
    setFilterCategory(event.target.value)
  };

  useEffect(() => {
      fetchProducts();
  }, [fetchProducts])

    return (
      <div className="flex justify-between items-start w-full">
        <Filters
          filtersArray={filtersArray}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          handleFilterChange={handleFilterChange}
        />
        <div className=" grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-28 ">
          {filteredProducts !== null && filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
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
            ))
          ) : (
            <p className="text-center col-span-full text-gray-600">
              No products found.
            </p>
          )}
        </div>
      </div>
    );
}

export default ProductListing