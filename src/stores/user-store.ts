import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

/**
 * Types
 */

interface UserCoordinates {
    latitude: number | null;
    longitude: number | null;
  }

interface UserStore extends UserCoordinates {
  setCoordinates: (coordinates: UserCoordinates) => void;
}

/**
 * useUserStore hook
 */

export const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      latitude: null,
      longitude: null,
      setCoordinates: ({ latitude, longitude }) =>
        set(() => ({
          latitude,
          longitude,
        })),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
