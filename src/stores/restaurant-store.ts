import { create } from "zustand";

/**
 * Types
 */

interface RestaurantStore extends RestaurantData {
  setSelectedRestaurant: (restaurantData: RestaurantData) => void;
}

interface RestaurantData {
  bannerSrc: string;
  logoSrc: string;
  name: string;
  ratingAverage: string;
  ratingTotal: string;
}

/**
 * useRestaurantStore hook
 */

export const useRestaurantStore = create<RestaurantStore>((set) => ({
  bannerSrc: "",
  logoSrc: "",
  name: "",
  ratingAverage: "",
  ratingTotal: "",
  setSelectedRestaurant: ({
    bannerSrc,
    logoSrc,
    name,
    ratingAverage,
    ratingTotal,
  }) =>
    set(() => ({
      bannerSrc,
      logoSrc,
      name,
      ratingAverage,
      ratingTotal,
    })),
}));
