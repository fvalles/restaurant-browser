import styled from "styled-components";
import { RestaurantCard } from "../../components/restaurant-card";
import { H1 } from "../../components/typography";
import { useFetchRestaurants } from "../../queries";
import { Link } from "react-router-dom";
import { Route } from "../../routes";
import { useRestaurantStore } from "../../stores";
import { AnimatedLayout } from "../../components/animated-layout";
import { Loading } from "../../components/loading";
import { useState } from "react";
import { EmptyState } from "../../components/empty-state";
import { getRestaurantDistance } from "../../helpers/get-restaurant-distance";
import { useUserCoordinates } from "../../hooks/use-user-coordinates";
import { useUserStore } from "../../stores/user-store";

/**
 * Styled Components
 */

const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
`;

const RestaurantCardContainer = styled.div`
  margin-bottom: 20px;
`;

const TitleContainer = styled.div`
  padding: 25px 0px;
  width: 313px;
`;

/**
 * Home Page
 */

export const Home = () => {
  useUserCoordinates();
  const { latitude: userLatitude, longitude: userLongitude } = useUserStore();
  const { data, error, isPending, isRefetching, refetch } =
    useFetchRestaurants();
  const { setSelectedRestaurant } = useRestaurantStore();
  const [animationFinish, setAnimationFinish] = useState(false);

  if (isRefetching || isPending || !animationFinish)
    return (
      <Loading
        onLoopComplete={() => {
          setAnimationFinish(true);
        }}
      />
    );

  if (error || !data)
    return (
      <EmptyState
        refetch={() => {
          refetch();
          setAnimationFinish(false);
        }}
      />
    );

  return (
    <AnimatedLayout>
      <Main>
        <TitleContainer>
          <H1>Restaurantes</H1>
        </TitleContainer>
        {data.map(
          ({
            coordinates: { latitude, longitude },
            id,
            image,
            logo,
            name,
            ratings,
          }) => {
            const linkRoute = `${Route.RESTAURANT_CATALOG}/${id}`;
            const restaurantDistance = getRestaurantDistance({
              userLatitude,
              userLongitude,
              restaurantLatitude: latitude,
              restaurantLongitude: longitude,
            });

            return (
              <RestaurantCardContainer key={id}>
                <Link
                  onClick={() =>
                    setSelectedRestaurant({
                      bannerSrc: image,
                      distance: restaurantDistance,
                      logoSrc: logo,
                      name,
                      ratingAverage: ratings.average,
                      ratingTotal: ratings.total,
                    })
                  }
                  to={linkRoute}
                >
                  <RestaurantCard
                    distance={restaurantDistance}
                    image={image}
                    logo={logo}
                    name={name}
                    ratings={ratings}
                  />
                </Link>
              </RestaurantCardContainer>
            );
          }
        )}
      </Main>
    </AnimatedLayout>
  );
};
