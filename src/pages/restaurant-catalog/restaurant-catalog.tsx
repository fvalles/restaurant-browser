import { Link, useParams } from "react-router-dom";
import { useRestaurantStore } from "../../stores";
import styled from "styled-components";
import { RestaurantLogo } from "../../components/restaurant-logo";
import { RestaurantInformation } from "../../components/restaurant-information";
import { useFetchCatalog } from "../../queries/use-fetch-catalog";
import { Icon } from "../../components/icon";
import { Route } from "../../routes";

/**
 * Constants
 */

const BANNER_ICON_SIZE = 32;

const MEDIA = {
  DESKTOP: "@media (min-width:768px)",
  TABLET: "@media (min-width:576px) and (max-width:768px)",
  PHONE: "@media (max-width:576px)",
};

const RESTAURANT_LOGO_SIZE = 74;

/**
 * Styled Components
 */

const Banner = styled.div<{ $bannerSrc: string }>`
  background-image: ${({ $bannerSrc }) => `url('${$bannerSrc}')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;

  ${MEDIA.PHONE} {
    height: 140px;
  }

  ${MEDIA.TABLET} {
    height: 240px;
  }

  ${MEDIA.DESKTOP} {
    height: 340px;
  }
`;

const BannerIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 35px 0px;
  z-index: 1;
`;

const LogoContainer = styled.div`
  margin-top: -30px;
`;

const Main = styled.main`
  margin: 0px 20px;
`;

const RestaurantInformationContainer = styled.div`
  margin: -25px 0px 0px 90px;
`;

const RightBannerIconsContainer = styled.div`
  display: flex;
`;

const StarIconContainer = styled.div`
  margin-left: 10px;
`;

/**
 * RestaurantCatalog Page
 */

export const RestaurantCatalog = () => {
  const { restaurantId } = useParams();
  const { isPending, error, data } = useFetchCatalog(restaurantId);
  const { bannerSrc, logoSrc, name, ratingAverage, ratingTotal } =
    useRestaurantStore();

  const logoAlt = `${name} logo`;

  if (isPending) return <></>;

  if (error) return <></>;

  console.log("data", data);

  return (
    <>
      <Banner $bannerSrc={bannerSrc}>
        <BannerIconsContainer>
          <Link to={Route.HOME}>
            <Icon name="back_arrow" size={BANNER_ICON_SIZE} />
          </Link>
          <RightBannerIconsContainer>
            <Icon name="search" size={BANNER_ICON_SIZE} />
            <StarIconContainer>
              <Icon name="star_filled" size={BANNER_ICON_SIZE} />
            </StarIconContainer>
          </RightBannerIconsContainer>
        </BannerIconsContainer>
      </Banner>
      <Main>
        <LogoContainer>
          <RestaurantLogo
            src={logoSrc}
            alt={logoAlt}
            size={RESTAURANT_LOGO_SIZE}
          />
        </LogoContainer>
        <RestaurantInformationContainer>
          <RestaurantInformation
            name={name}
            ratingAverage={ratingAverage}
            ratingTotal={ratingTotal}
          />
        </RestaurantInformationContainer>
      </Main>
    </>
  );
};
