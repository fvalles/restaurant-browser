import styled from "styled-components";
import coverBk from "../../assets/images/cover-bk.png";
import logoBk from "../../assets/images/logo-bk.png";
import { RestaurantDetails } from "../restaurant-details";

/**
 * Styled Components
 */

const LogoImage = styled.img`
  background-color: ${({ theme }) => theme.Colors.white};
  border-radius: 15px;
  height: 55px;
  width: 55px;
`;

const LogoImageContainer = styled.div`
  margin: -20px 0px 0px 20px;
`;

const CardBanner = styled.img`
  border-radius: 15px 15px 0px 0px;
  height: 122px;
  width: 313px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardFooter = styled.div`
  border-radius: 0px 0px 15px 15px;
  box-shadow: ${({ theme }) => theme.Colors.shadow} 0px 0px 2px 0px;
  height: 80px;
  margin-top: -37px;
  width: 313px;
`;

const FooterContainer = styled.div`
  margin: 10px 0px 0px 85px;
`;

/**
 * RestaurantCard Component
 */

export const RestaurantCard = () => (
  <CardContainer>
    <CardBanner src={coverBk} alt="asdasd" />
    <LogoImageContainer>
      <LogoImage src={logoBk} alt="asdasd" />
    </LogoImageContainer>
    <CardFooter>
      <FooterContainer>
        <RestaurantDetails name="BURGER KING" ratingAverage={4.5} ratingTotal={456} />
      </FooterContainer>
    </CardFooter>
  </CardContainer>
);
