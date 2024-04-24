import styled from "styled-components";
import { Header } from "./components/header";
import { H1 } from "./components/typography";
import { RestaurantCard } from "./components/restaurant-card";

/**
 * Styled Components
 */

const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
`;

const TitleContainer = styled.div`
  padding: 25px 0px;
  width: 313px;
`;

/**
 * App Component
 */

function App() {
  return (
    <>
      <Header />
      <Main>
        <TitleContainer>
          <H1>Restaurantes</H1>
        </TitleContainer>
        <RestaurantCard />
      </Main>
    </>
  );
}

export default App;
