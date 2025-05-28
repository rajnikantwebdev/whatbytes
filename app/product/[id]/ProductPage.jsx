"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data[id]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  // Quantity handler
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 1) setQuantity(value);
  };

  // Add to Cart handler
  const handleAddToCart = () => {
    if (product) {
      alert(`Added ${quantity} ${product.productName} to cart!`);
    }
  };

  if (loading || !product) {
    return (
      <div className="min-h-screen bg-gray-100 py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 animate-pulse">
            {/* Skeleton Image Section (Left) */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="w-full h-[400px] bg-gray-200 rounded-2xl"></div>
              </div>
            </div>

            {/* Skeleton Details Section (Right) */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                {/* Skeleton Product Title */}
                <div className="h-8 w-3/4 bg-gray-200 rounded mb-4"></div>
                {/* Skeleton Price */}
                <div className="h-7 w-1/4 bg-gray-200 rounded mb-4"></div>
                {/* Skeleton Description */}
                <div className="h-5 w-full bg-gray-200 rounded mb-4"></div>
                <div className="h-5 w-5/6 bg-gray-200 rounded mb-4"></div>
                {/* Skeleton Quantity Selector */}
                <div className="mb-4">
                  <div className="h-6 w-20 bg-gray-200 rounded mb-2"></div>
                  <div className="h-10 w-20 bg-gray-200 rounded"></div>
                </div>
                {/* Skeleton Add to Cart Button */}
                <div className="h-12 w-full lg:w-40 bg-gray-200 rounded-xl"></div>
                {/* Skeleton Reviews Section */}
                <div className="mt-8">
                  <div className="h-6 w-32 bg-gray-200 rounded mb-4"></div>
                  <div className="border-t pt-4 mt-4">
                    <div className="h-5 w-1/4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 w-1/3 bg-gray-200 rounded mb-2"></div>
                    <div className="h-5 w-3/4 bg-gray-200 rounded"></div>
                  </div>
                  <div className="border-t pt-4 mt-4">
                    <div className="h-5 w-1/4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 w-1/3 bg-gray-200 rounded mb-2"></div>
                    <div className="h-5 w-3/4 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image Section (Left) */}
          <div className="lg:w-1/2">
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              <img
                src={product.imageSrc}
                alt={product.productName}
                className="w-full h-[400px] object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Details Section (Right) */}
          <div className="lg:w-1/2">
            <div className="rounded-2xl shadow-xl p-6">
              {/* Product Title */}
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {product.productName}
              </h1>

              {/* Price */}
              <p className="text-2xl font-semibold mb-4 secondary-bg-text">
                ${product.productPrice.toLocaleString()}
              </p>

              {/* Description */}
              <p className="text-gray-600 mb-4">
                {product.description || "No description available."}
              </p>

              {/* Quantity Selector */}
              <div className="mb-4">
                <label
                  htmlFor="quantity"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                  className="w-20 p-2 border rounded-lg text-center text-black"
                  aria-label="Quantity"
                />
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="secondary-bg text-white px-6 py-3 rounded-xl transition w-full lg:w-auto"
              >
                Add to Cart
              </button>

              {/* Reviews Section */}
              {product.reviews && product.reviews.length > 0 ? (
                <div className="mt-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Reviews
                  </h2>
                  {product.reviews.map((review, index) => (
                    <div key={index} className="border-t pt-4 mt-4">
                      <p className="font-semibold text-gray-700">
                        {review.user}
                      </p>
                      <p className="text-yellow-500">
                        {"★".repeat(review.rating)}
                      </p>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Reviews
                  </h2>
                  <p className="text-gray-600">No reviews yet.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;