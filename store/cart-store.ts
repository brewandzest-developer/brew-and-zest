"use client";

import { create } from "zustand";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity?: number;
};

export type CartStore = {
  items: CartItem[];

  isOpen: boolean;

  openCart: () => void;

  closeCart: () => void;

  addItem: (item: CartItem) => void;

  removeItem: (id: number) => void;

  clearCart: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
  items: [],

  isOpen: false,

  openCart: () =>
    set(() => ({
      isOpen: true,
    })),

  closeCart: () =>
    set(() => ({
      isOpen: false,
    })),

  addItem: (item) =>
    set((state) => {
      const existingItem = state.items.find(
        (i) => i.id === item.id
      );

      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.id === item.id
              ? {
                  ...i,
                  quantity: (i.quantity || 1) + 1,
                }
              : i
          ),
          isOpen: true,
        };
      }

      return {
        items: [
          ...state.items,
          {
            ...item,
            quantity: 1,
          },
        ],
        isOpen: true,
      };
    }),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter(
        (item) => item.id !== id
      ),
    })),

  clearCart: () =>
    set(() => ({
      items: [],
    })),
}));