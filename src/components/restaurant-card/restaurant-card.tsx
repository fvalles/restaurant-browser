import styled from "styled-components";
import { RestaurantDetails } from "../restaurant-details";
import { RestaurantsDto } from "../../types";

/**
 * Types
 */

type RestaurantCardProps = Omit<RestaurantsDto, "coordinates" | "id">;

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
  z-index: -1;
`;

const FooterContainer = styled.div`
  margin: 10px 0px 0px 85px;
`;

/**
 * RestaurantCard Component
 */

export const RestaurantCard = ({
  image: banner,
  logo,
  name,
  ratings,
}: RestaurantCardProps) => {
  const cardBannerAlt = `${name} banner`;
  const cardLogoAlt = `${name} logo`;
  const { average, total } = ratings;

  return (
    <CardContainer>
      <CardBanner src={banner} alt={cardBannerAlt} />
      <LogoImageContainer>
        <LogoImage src={logo} alt={cardLogoAlt} />
      </LogoImageContainer>
      <CardFooter>
        <FooterContainer>
          <RestaurantDetails
            name={name}
            ratingAverage={average}
            ratingTotal={total}
          />
        </FooterContainer>
      </CardFooter>
    </CardContainer>
  );
};
