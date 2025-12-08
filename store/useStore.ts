import { create } from "zustand";
import { View, CartItem } from "@/lib/types";

interface StoreState {
  view: View;
  setView: (view: View) => void;

  isMenuOpen: boolean;
  toggleMenu: () => void;
  setMenuOpen: (open: boolean) => void;

  cart: CartItem[];
  addToCart: (productId: string, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartItemQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartItemCount: () => number;
}

export const useStore = create<StoreState>((set, get) => ({
  view: "garden",
  setView: (view) => set({ view: view }),

  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  setMenuOpen: (open) => set({ isMenuOpen: open }),

  cart: [],
  addToCart: (productId, quantity = 1) => {
    const cart = get().cart;
    const existingItem = cart.find((item) => item.productId === productId);

    if (existingItem) {
      set({
        cart: cart.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        ),
      });
    } else {
      set({ cart: [...cart, { productId, quantity }] });
    }
  },
  removeFromCart: (productId) => {
    set({
      cart: get().cart.filter((item) => item.productId !== productId),
    });
  },
  updateCartItemQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      get().removeFromCart(productId);
      return;
    }
    set({
      cart: get().cart.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      ),
    });
  },
  clearCart: () => set({ cart: [] }),
  getCartItemCount: () => {
    return get().cart.reduce((total, item) => total + item.quantity, 0);
  },
}));
