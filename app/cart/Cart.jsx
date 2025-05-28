"use client";
import React from "react";
import useCartStore from "../utilities/cartStore";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCartStore();

  return (
    <div className="p-4 mt-20 bg-white">
      <h1 className="text-2xl font-bold mb-4 text-black">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center mb-4 p-4 bg-white rounded-lg shadow-md"
            >
              <div>
                <h3 className="text-lg text-black font-semibold">{item.productName}</h3>
                <p className="text-black">${item.productPrice}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.productName)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg cursor-pointer"
                aria-label={`Remove ${item.productName} from cart`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  class="lucide lucide-trash2-icon lucide-trash-2"
                >
                  <path d="M3 6h18" />
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                  <line x1="10" x2="10" y1="11" y2="17" />
                  <line x1="14" x2="14" y1="11" y2="17" />
                </svg>
              </button>
            </div>
          ))}
          <button
            onClick={clearCart}
            className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg"
            aria-label="Clear cart"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
