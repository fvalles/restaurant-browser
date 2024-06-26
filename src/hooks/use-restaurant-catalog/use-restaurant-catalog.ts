import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCartStore, useRestaurantStore } from "../../stores";
import { useFetchCatalog } from "../../queries/use-fetch-catalog";
import { toast } from "react-toastify";

/**
 * useRestaurantCatalog hook
 */

export const useRestaurantCatalog = () => {
  const { restaurantId } = useParams();
  const [activeType, setActiveType] = useState("");
  const [animationFinish, setAnimationFinish] = useState(false);
  const { data, error, isPending, isRefetching, refetch } =
    useFetchCatalog(restaurantId);
  const { bannerSrc, distance, logoSrc, name, ratingAverage, ratingTotal } =
    useRestaurantStore();
  const { cart, removeAll, totalPrice } = useCartStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const logoAlt = `${name} logo`;

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleProductTypeClick = (productType: string) => {
    activeType === productType ? setActiveType("") : setActiveType(productType);
  };

  const handlePurchase = () => {
    removeAll();
    toast.success("¡Compra realizada con éxito!", {
      position: "bottom-center",
      toastId: "purchase",
    });
  };

  return {
    activeType,
    animationFinish,
    bannerSrc,
    cart,
    data,
    distance,
    error,
    handleCloseModal,
    handleOpenModal,
    handleProductTypeClick,
    handlePurchase,
    isModalOpen,
    isPending,
    isRefetching,
    logoAlt,
    logoSrc,
    name,
    ratingAverage,
    ratingTotal,
    refetch,
    restaurantId,
    setAnimationFinish,
    totalPrice,
  };
};
