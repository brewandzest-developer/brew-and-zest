"use client";

import { create } from "zustand";

export type CartItem = {
  id: number;

  slug: string;

  name: string;

  image: string;

  price: number;

  quantity?: number;

  selectedSize?: string;
};

export type CartStore = {
  items: CartItem[];

  isOpen: boolean;

  openCart: () => void;

  closeCart: () => void;

  addItem: (item: CartItem) => void;

  removeItem: (
    id: number,
    selectedSize?: string
  ) => void;

  increaseQuantity: (
    id: number,
    selectedSize?: string
  ) => void;

  decreaseQuantity: (
    id: number,
    selectedSize?: string
  ) => void;

  clearCart: () => void;
};

export const useCartStore =
  create<CartStore>((set) => ({
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
        const existingItem =
          state.items.find(
            (i) =>
              i.id === item.id &&
              i.selectedSize ===
                item.selectedSize
          );

        if (existingItem) {
          return {
            items: state.items.map((i) =>
              i.id === item.id &&
              i.selectedSize ===
                item.selectedSize
                ? {
                    ...i,
                    quantity:
                      (i.quantity || 1) + 1,
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

    removeItem: (id, selectedSize) =>
      set((state) => ({
        items: state.items.filter(
          (item) =>
            !(
              item.id === id &&
              item.selectedSize ===
                selectedSize
            )
        ),
      })),

    increaseQuantity: (
      id,
      selectedSize
    ) =>
      set((state) => ({
        items: state.items.map((item) =>
          item.id === id &&
          item.selectedSize ===
            selectedSize
            ? {
                ...item,
                quantity:
                  (item.quantity || 1) + 1,
              }
            : item
        ),
      })),

    decreaseQuantity: (
      id,
      selectedSize
    ) =>
      set((state) => ({
        items: state.items
          .map((item) =>
            item.id === id &&
            item.selectedSize ===
              selectedSize
              ? {
                  ...item,
                  quantity:
                    (item.quantity || 1) - 1,
                }
              : item
          )
          .filter(
            (item) =>
              (item.quantity || 1) > 0
          ),
      })),

    clearCart: () =>
      set(() => ({
        items: [],
      })),
  }));