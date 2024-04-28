export interface CoordinatesDto {
  latitude: number;
  longitude: number;
}

export interface ProductDto {
  image: string;
  name: string;
  price: number;
}

export interface RatingsDto {
  average: string;
  total: string;
}

export interface CatalogDto {
  name: string;
  products: ProductDto[];
}

export interface RestaurantsDto {
  coordinates: CoordinatesDto;
  id: string;
  image: string;
  logo: string;
  name: string;
  ratings: RatingsDto;
}
