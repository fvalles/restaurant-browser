import styled from "styled-components";
import { RestaurantsDto } from "../../types";
import { RestaurantInformation } from "../restaurant-information";
import { RestaurantLogo } from "../restaurant-logo";

/**
 * Types
 */

interface RestaurantCardProps
  extends Omit<RestaurantsDto, "coordinates" | "id"> {
  distance: number | null;
}

/**
 * Styled Components
 */

const LogoContainer = styled.div`
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
  distance,
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
      <LogoContainer>
        <RestaurantLogo src={logo} alt={cardLogoAlt} size={55} />
      </LogoContainer>
      <CardFooter>
        <FooterContainer>
          <RestaurantInformation
            distance={distance}
            name={name}
            ratingAverage={average}
            ratingTotal={total}
          />
        </FooterContainer>
      </CardFooter>
    </CardContainer>
  );
};
