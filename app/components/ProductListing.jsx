"use client";
import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import useProductStore from "../utilities/productStore";
import ProductCard from "./ProductCard";
import Filters from "./Filters";

const ProductListing = () => {
  const filtersArray = ["all", "electronics", "clothing", "home"];

  const filteredProducts = useProductStore((state) => state.filteredProducts);
  const loading = useProductStore((state) => state.loading);
  const error = useProductStore((state) => state.error);
  const filterCategory = useProductStore((state) => state.filterCategory);
  const minPrice = useProductStore((state) => state.minPrice);
  const maxPrice = useProductStore((state) => state.maxPrice);
  const searchQuery = useProductStore((state) => state.searchQuery);
  const applyUrlFilters = useProductStore((state) => state.applyUrlFilters);
  const fetchProducts = useProductStore((state) => state.fetchProducts);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    useProductStore.getState().fetchProducts();
  }, []);

  useEffect(() => {
    const query = {
      category: searchParams.get("category") || "all",
      price: searchParams.get("price") || "1000-20000",
      search: searchParams.get("search") || null,
    };
    useProductStore.getState().applyUrlFilters(query);
  }, [searchParams]);

  // Update URL on filter changes
  const updateUrl = (updates) => {
    const query = new URLSearchParams(searchParams);
    if (updates.category) query.set("category", updates.category);
    else if (updates.category === "all") query.delete("category");

    if (updates.minPrice !== undefined && updates.maxPrice !== undefined) {
      query.set("price", `${updates.minPrice}-${updates.maxPrice}`);
    } else if (updates.removePrice) {
      query.delete("price");
    }

    if (updates.search) query.set("search", updates.search);
    else if (updates.search === null) query.delete("search");

    router.push(`?${query.toString()}`, { scroll: false });
  };

  const handleFilterChange = (event) => {
    updateUrl({ category: event.target.value });
  };

  const handlePriceChange = (e, type) => {
    const value = Number(e.target.value);
    if (type === "min" && value <= maxPrice) {
      updateUrl({ minPrice: value, maxPrice });
    } else if (type === "max" && value >= minPrice) {
      updateUrl({ minPrice, maxPrice: value });
    }
  };

  const handleSearchChange = (e) => {
    const search = e.target.value || null;
    updateUrl({ search });
  };

  if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  return (
    <div className="flex justify-between items-start w-full">
      <Filters
        filtersArray={filtersArray}
        selectedFilter={filterCategory}
        handleFilterChange={handleFilterChange}
        minPrice={minPrice}
        maxPrice={maxPrice}
        handlePriceChange={handlePriceChange}
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
      />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-28">
        {loading ? (
          Array(6)
            .fill()
            .map((_, index) => <ProductCard key={index} loading={true} />)
        ) : filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <Link key={index} href={`/product/${index}`}>
              <ProductCard
                imgSrc={product.imageSrc}
                productName={product.productName}
                productPrice={product.productPrice}
                productRatings={product.productRatings}
                loading={false}
              />
            </Link>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductListing;