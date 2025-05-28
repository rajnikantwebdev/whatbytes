import { create } from "zustand";

const useProductStore = create((set, get) => ({
    products: [],
    filteredProducts: [],
    loading: true,
    error: null,
    filterCategory: "all",
    sortOption: "default",

    // fetchProducts: async (filters) => {
    //     if(filters === "all") {
    //         try {
    //             set({ loading: true, error: null });
    //             const response = await fetch("/data.json");
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! status: ${response.status}`);
    //             }
    //             const data = await response.json();
    //             set({ products: data, loading: false });
    //         } catch (error) {
    //             set({ loading: false, error: error.message });
    //         }
    //     } else if(filters === "electronics") {
    //         try {
    //             set({ loading: true, error: null });
    //             const response = await fetch("/data.json");
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! status: ${response.status}`);
    //             }
    //             const data = await response.json()
    //             const result = data.filter((d) => d.category === filters)

    //             set({ products: result, loading: false });
    //         } catch (error) {
    //             set({ loading: false, error: error.message });
    //         }
    //     } else if (filters === "clothing") {
    //         try {
    //             set({ loading: true, error: null });
    //             const response = await fetch("/data.json");
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! status: ${response.status}`);
    //             }
    //             const data = await response.json()
    //             const result = data.filter((d) => d.category === filters)

    //             set({ products: result, loading: false });
    //         } catch (error) {
    //             set({ loading: false, error: error.message });
    //         }
    //     }

    //     else if (filters === "home") {
    //         try {
    //             set({ loading: true, error: null });
    //             const response = await fetch("/data.json");
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! status: ${response.status}`);
    //             }
    //             const data = await response.json()
    //             const result = data.filter((d) => d.category === filters)

    //             set({ products: result, loading: false });
    //         } catch (error) {
    //             set({ loading: false, error: error.message });
    //         }
    //     }
        
    // },

    fetchProducts: async () => {
        try {
            set({ loading: true, error: null });
            const response = await fetch("/data.json");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            set({ products: data, filteredProducts: data, loading: false });
        } catch (error) {
            set({ loading: false, error: error.message });
        }
    },

    // Set filter category and update filtered products
    setFilterCategory: (category) => {
        console.log("category: ", category)
        set({ filterCategory: category });
        const { products } = get();
        console.log("products-filter: ", products)
        useProductStore.getState().updateFilteredProducts({ products, filterCategory: category });
      },

    updateFilteredProducts: ({ products, filterCategory }) =>
        set(() => {
            let filteredProducts = [...products];

            // Filter by category
            if (filterCategory !== "all") {
                filteredProducts = filteredProducts.filter(
                    (product) => product.category === filterCategory
                );
            }

            // Sort products
            // if (sortOption === "priceLowToHigh") {
            //     filteredProducts.sort((a, b) => a.productPrice - b.productPrice);
            // } else if (sortOption === "priceHighToLow") {
            //     filteredProducts.sort((a, b) => b.productPrice - a.productPrice);
            // } else if (sortOption === "ratingsHighToLow") {
            //     filteredProducts.sort((a, b) => b.productRatings - a.productRatings);
            // }
            console.log("filtered: ", filteredProducts)
            return { filteredProducts };
        }),
}))

export default useProductStore