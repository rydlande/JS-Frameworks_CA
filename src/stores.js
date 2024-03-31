import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  addToCart: (product) =>
    set((state) => {
      localStorage.setItem(
        'cart',
        JSON.stringify([...state.cart, product])
      );
      return { 
        cart: [...state.cart, product] 
      };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const updatedCart = state.cart.filter((product) => product.id !== id); /* dont know if != or !== is correct */
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),

  clearCart: () =>
    set(() => {
      localStorage.removeItem('cart');
      return { cart: [] };
    })
}));

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => 
    set(() => ({ products })),

  fetchProducts: async () => {
    try {
      const res = await fetch('https://v2.api.noroff.dev/online-shop/');
      const data = await res.json();
      set({ products: data.data });
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  },
}));