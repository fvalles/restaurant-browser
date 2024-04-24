import styled from "styled-components";
import { Header } from "./components/header";
import { H1 } from "./components/typography";
import { RestaurantCard } from "./components/restaurant-card";
import { useFetchRestaurants } from "./queries";

/**
 * Styled Components
 */

const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
`;

const RestaurantCardContainer = styled.div<{ isLastItem: boolean }>`
  margin-bottom: ${({ isLastItem }) => (isLastItem ? "0px" : "20px")};
`;

const TitleContainer = styled.div`
  padding: 25px 0px;
  width: 313px;
`;

/**
 * App Component
 */

function App() {
  const { isPending, error, data } = useFetchRestaurants();

  console.log("isPending", isPending);
  console.log("error", error);
  console.log("data", data);

  if (isPending) return <></>;

  if (error) return <></>;

  return (
    <>
      <Header />
      <Main>
        <TitleContainer>
          <H1>Restaurantes</H1>
        </TitleContainer>
        {data.map(({ id, image, logo, name, ratings }, index) => (
          <RestaurantCardContainer isLastItem={index === data.length}>
            <RestaurantCard
              key={id}
              image={image}
              logo={logo}
              name={name}
              ratings={ratings}
            />
          </RestaurantCardContainer>
        ))}
      </Main>
    </>
  );
}

export default App;
