export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Product {
  image: string;
  name: string;
  price: number;
}

export interface Ratings {
  average: string;
  total: string;
}

export interface CatalogDto {
  name: string;
  products: Product[];
}

export interface RestaurantsDto {
  coordinates: Coordinates;
  id: string;
  image: string;
  logo: string;
  name: string;
  ratings: Ratings;
}
