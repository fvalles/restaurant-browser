import { create } from "zustand";
import { ProductDto } from "../types";

/**
 * Types
 */

type Product = Omit<ProductDto, "image">;

export interface CartItem extends Product {
  count: number;
}

type HandleAddItem = (product: Product) => void;

type HandleRemoveItem = (productName: string) => void;

interface HandleCartItemResult {
  newCart: CartItem[];
  newTotalPrice: number;
}

interface CartStore {
  add: HandleAddItem;
  cart: CartItem[];
  removeAll: () => void;
  remove: HandleRemoveItem;
  totalPrice: number;
}

/**
 * Helpers
 */

const addCartItem = (
  cart: CartItem[],
  product: Product,
  totalPrice: number
): HandleCartItemResult => {
  const { name, price } = product;
  totalPrice += price;

  const foundProduct = cart.filter(
    ({ name: cartItemName }) => cartItemName === name
  )[0];

  if (!foundProduct) {
    cart.push({ ...product, count: 1 });

    return {
      newCart: cart,
      newTotalPrice: Number(totalPrice.toFixed(2)),
    };
  }

  const newCart = cart.map((cartItem) => {
    if (cartItem.name === name) {
      return { ...cartItem, count: cartItem.count + 1 };
    }

    return cartItem;
  });

  return {
    newCart: newCart,
    newTotalPrice: Number(totalPrice.toFixed(2)),
  };
};

const removeCartItem = (
  cart: CartItem[],
  productName: string,
  totalPrice: number
): HandleCartItemResult => {
  let priceToSubstract = 0;

  const newCart = cart.map((cartItem) => {
    if (cartItem.name === productName) {
      priceToSubstract = cartItem.price;
      const newCartItemCount = cartItem.count - 1;

      return {
        ...cartItem,
        count: newCartItemCount < 0 ? cartItem.count : newCartItemCount,
      };
    }

    return cartItem;
  });

  const newTotalPrice = Number((totalPrice - priceToSubstract).toFixed(2));

  return {
    newCart,
    newTotalPrice: newTotalPrice < 0 ? totalPrice : newTotalPrice,
  };
};

/**
 * useCartStore hook
 */

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],
  totalPrice: 0,
  add: (product: Product) => {
    const { cart, totalPrice } = get();
    const { newCart, newTotalPrice } = addCartItem(cart, product, totalPrice);
    set({ cart: newCart, totalPrice: newTotalPrice });
  },
  remove: (productName: string) => {
    const { cart, totalPrice } = get();
    const { newCart, newTotalPrice } = removeCartItem(
      cart,
      productName,
      totalPrice
    );
    set({ cart: newCart, totalPrice: newTotalPrice });
  },
  removeAll: () => set({ cart: [], totalPrice: 0 }),
}));
