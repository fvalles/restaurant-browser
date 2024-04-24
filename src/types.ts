export interface RestaurantsDto {
  id: string;
  name: string;
  image: string;
  logo: string;
  ratings: {
    total: string;
    average: string;
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
}
