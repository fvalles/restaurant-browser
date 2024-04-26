import styled from "styled-components";
import { MEDIA } from "../../constants/media-queries";

/**
 * Types
 */

interface ProductTypeChipProps {
  $active?: boolean;
  $isFirst?: boolean;
  $isLast?: boolean;
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
  display: flex;
  justify-content: center;
`;

export const LogoContainer = styled.div`
  margin-left: 20px;
  margin-top: -30px;
`;

export const Main = styled.main`
  margin: 0px;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 15px;

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

export const ProductTypeChip = styled.button<ProductTypeChipProps>`
  background-color: ${({ $active, theme }) =>
    $active ? theme.Colors.primary : theme.Colors.white};
  border-radius: 25px;
  margin-left: ${({ $isFirst }) => ($isFirst ? "20px" : "10px")};
  margin-right: ${({ $isLast }) => ($isLast ? "20px" : "0px")};
  padding: 10px 12px;
`;

export const ProductTypesContainer = styled.div`
  display: flex;
  margin-top: 20px;
  overflow: auto;
  white-space: nowrap;
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
