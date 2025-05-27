"use client"
import React from 'react'
import { useState } from 'react';

const Filters = () => {
  const filtersArray = ["all", "electronics", "cloting", "home"];
  const [selectedFilter, setSelectedFilter] = useState(filtersArray[0]);
  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };
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
        <h3 className="text-lg mb-2">Price</h3>
        <div className="flex items-center gap-1">
          <span>0</span>
          <progress className="progress w-full" value="10" max="100"></progress>
          <span>1000</span>
        </div>
      </div>
    </div>
  );
}

export default Filters