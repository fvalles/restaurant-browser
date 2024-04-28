import { CatalogDto, ProductDto } from "../types";

/**
 * Types
 */

interface CatalogProduct extends ProductDto {
  type: string;
}

/**
 * getCatalogProducts helper
 */

export const getCatalogProducts = (data: CatalogDto[]) => {
  const catalogProducts: CatalogProduct[] = [];
  const productTypes: string[] = [];

  data.forEach(({ name: productType, products }) => {
    productTypes.push(productType);

    products.forEach((product) => {
      catalogProducts.push({ ...product, type: productType });
    });
  });

  return {
    catalogProducts,
    productTypes,
  };
};
