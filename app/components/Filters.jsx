"use client"
import React from 'react'
import { useState } from 'react';

const Filters = ({
  filtersArray,
  selectedFilter,
  setSelectedFilter,
  handleFilterChange,
  minPrice,
  maxPrice,
  handlePriceChange,
}) => {
  return (
    <div className="secondary-bg min-w-3xs rounded-lg px-6 py-8 mt-28 max-w-3xs">
      <h2 className="text-2xl mb-4">Filters</h2>

      <ul className="mb-4">
        <h3 className="text-lg mb-2">Category</h3>
        {filtersArray.map((filter, index) => {
          return (
            <li key={index} className="flex gap-2 space-y-2">
              <input
                id={filter}
                value={filter}
                checked={selectedFilter === filter}
                type="radio"
                name="filter_button"
                className="radio checked:bg-white  checked:text-blue-600"
                onChange={handleFilterChange}
              />
              <label htmlFor={filter}>
                {filter.substring(0, 1).toUpperCase() + filter.substring(1)}
              </label>
            </li>
          );
        })}
      </ul>

      <div>
        <h3 className="text-lg font-semibold mb-2">Price</h3>
        <div className="flex items-center gap-4">
          <span className="text-sm">${minPrice}</span>
          <input
            type="range"
            min="1000"
            max="20000"
            value={minPrice}
            onChange={(e) => handlePriceChange(e, "min")}
            className="w-full"
            aria-label="Minimum price"
          />
          {/* <input
            type="range"
            min="1000"
            max="20000"
            value={maxPrice}
            onChange={(e) => handlePriceChange(e, "max")}
            className="w-full"
            aria-label="Maximum price"
          /> */}
          <span className="text-sm">${maxPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default Filters