import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  addToCart: (product) =>
    set((state) => {
      if (state.cart.some((item) => item.id === product.id)) {
        const newCart = state.cart.map((item) => {
          if (item.id === product.id) {
            item.quantity += 1;
          }
          return item;
        })
        localStorage.setItem('cart', JSON.stringify([...newCart]));
        return {
          cart: [...newCart]
        }
      }
      const newProduct = { ...product, quantity: 1 };
      localStorage.setItem(
        'cart',
        JSON.stringify([...state.cart, newProduct])
      );
      return { 
        cart: [...state.cart, newProduct]
      };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const updatedCart = state.cart.filter((product) => product.id !== id);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),

  clearCart: () =>
    set(() => {
      localStorage.removeItem('cart');
      return { cart: [] };
    }),

  increaseQuantity: (id) =>
    set((state) => {
      const updatedCart = state.cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),

  decreaseQuantity: (id) =>
    set((state) => {
      const updatedCart = state.cart.map((item) => {
        if (item.id === id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),
}));

export const useProductStore = create((set) => ({
  products: [],
  loading: false,

  setProducts: (products) => set({ products }),
  
  setLoading: (loading) => set({ loading }),

  fetchProducts: async () => {
    set({ loading: true });
    setTimeout(async () => {
      try {
        const res = await fetch('https://v2.api.noroff.dev/online-shop/');
        const data = await res.json();
        set({ products: data.data, loading: false });
      } catch (error) {
        console.error("Failed to fetch products:", error);
        set({ loading: false });
      }
    }, 1000);
  },
}));
