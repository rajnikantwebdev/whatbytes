import { create } from "zustand";

const useProductStore = create((set, get) => ({
  products: [],
  filteredProducts: [],
  loading: true,
  error: null,
  filterCategory: "all",
  sortOption: "default",
  searchQuery: null,
  minPrice: 1000,
  maxPrice: 20000,

  fetchProducts: async () => {
    try {
      set({ loading: true, error: null });
      const response = await fetch("/data.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${ response.status } `);
      }
      const data = await response.json();
      set({ products: data, filteredProducts: data, loading: false });
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },

  updateSearchQuery: (searchText) => {
    set({searchQuery: searchText})
  },

  applyUrlFilters: (query) => {
    set((state) => {
      const { products } = state;
      const category = query.category || "all";
      const priceRange = query.price ? query.price.split("-").map(Number) : [1000, 20000];
      const [minPrice, maxPrice] = priceRange;
      const searchQuery = query.search || null;

      const filteredProducts = get().updateFilteredProducts({
        products,
        filterCategory: category,
        searchQuery,
        minPrice,
        maxPrice,
      });

      console.log(filteredProducts)

      return { filterCategory: category, minPrice, maxPrice, searchQuery, filteredProducts };
    });
  },

  updateFilteredProducts: ({ products, filterCategory, searchQuery, minPrice, maxPrice }) => {
    let filteredProducts = [...products];
      
    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) =>
        product.productName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filterCategory !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === filterCategory
      );
      console.log("filter-cate: ", filteredProducts)
    }

    filteredProducts = filteredProducts.filter(
        (product) => product.productPrice >= minPrice && product.productPrice <= maxPrice
    );
      console.log("filter-cate-before: ", filteredProducts)

    return filteredProducts;
  },
}));

export default useProductStore;