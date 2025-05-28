import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],

      addToCart: (product) => {
        console.log("product", product)
        set((state) => {
          const existingItem = state.cartItems.find(
            (item) => item.productName === product.productName
          );
          alert("Product added")
          if (existingItem) {
            alert("Product already added")
            return state;
          }
          return { cartItems: [...state.cartItems, product] };
        });
      },

      removeFromCart: (productName) => {
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.productName !== productName),
        }));
        alert("Product removed")
      },

      // Clear all items from cart
      clearCart: () => {
        set({ cartItems: [] });
      },
    }),
    {
      name: "cart-storage", // Key in localStorage
    }
  )
);

export default useCartStore;