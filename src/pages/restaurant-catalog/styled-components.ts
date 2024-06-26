import styled from "styled-components";
import { MEDIA } from "../../constants/media-queries";

/**
 * Types
 */

interface TotalOrderButtonProps {
  $isVisible: boolean;
}

interface ProductsContainerProps {
  $isOrderButtonVisible: boolean;
}

/**
 * Styled Components
 */

export const Banner = styled.div<{ $bannerSrc: string }>`
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

export const BannerIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 35px 0px;
  z-index: 1;
`;

export const CenteredContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LogoContainer = styled.div`
  margin-left: 20px;
  margin-top: -30px;
`;

export const Main = styled.main`
  margin: 0px;
`;

export const ProductsContainer = styled.div<ProductsContainerProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 15px 0px
    ${({ $isOrderButtonVisible }) => ($isOrderButtonVisible ? "100px" : "0px")};

  ${MEDIA.PHONE} {
    width: 324px;
  }

  ${MEDIA.TABLET} {
    width: 370px;
  }

  ${MEDIA.DESKTOP} {
    width: 410px;
  }
`;

export const ProductCardContainer = styled.div`
  margin-bottom: 15px;
`;

export const RestaurantInformationContainer = styled.div`
  margin: -25px 0px 0px 110px;
`;

export const RightBannerIconsContainer = styled.div`
  display: flex;
`;

export const StarIconContainer = styled.div`
  margin-left: 10px;
`;

export const TotalOrderButton = styled.button<TotalOrderButtonProps>`
  background-color: ${({ theme }) => theme.Colors.primary};
  border-radius: 10px;
  bottom: 30px;
  padding: 15px 85px;
  position: fixed;
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
`;
