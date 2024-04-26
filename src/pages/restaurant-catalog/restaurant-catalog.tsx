import { Link, useParams } from "react-router-dom";
import { useRestaurantStore } from "../../stores";
import { RestaurantLogo } from "../../components/restaurant-logo";
import { RestaurantInformation } from "../../components/restaurant-information";
import { useFetchCatalog } from "../../queries/use-fetch-catalog";
import { Icon } from "../../components/icon";
import { Route } from "../../routes";
import { ProductCard } from "../../components/product-card";
import { getCatalogProducts } from "../../helpers/get-catalog-products";
import {
  Banner,
  BannerIconsContainer,
  CenteredContainer,
  LogoContainer,
  Main,
  ProductCardContainer,
  ProductTypeChip,
  ProductTypesContainer,
  ProductsContainer,
  RestaurantInformationContainer,
  RightBannerIconsContainer,
  StarIconContainer,
} from "./styled-components";
import { ParagraphLarge } from "../../components/typography";
import { useEffect, useState } from "react";

/**
 * Constants
 */

const BANNER_ICON_SIZE = 32;

const RESTAURANT_LOGO_SIZE = 74;

/**
 * RestaurantCatalog Page
 */

export const RestaurantCatalog = () => {
  const { restaurantId } = useParams();
  const [activeType, setActiveType] = useState("");
  const { isPending, error, data } = useFetchCatalog(restaurantId);
  const { bannerSrc, logoSrc, name, ratingAverage, ratingTotal } =
    useRestaurantStore();

  const logoAlt = `${name} logo`;

  if (isPending) return <></>;

  if (error) return <></>;

  const { catalogProducts, productTypes } = getCatalogProducts(data);

  const filteredCatalogProducts = catalogProducts.filter(
    ({ type }) => activeType === "" || type === activeType
  );

  const handleProductTypeChipClick = (productType: string) => {
    activeType === productType ? setActiveType("") : setActiveType(productType);
  };

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
        <ProductTypesContainer>
          {productTypes.map((productType, index) => {
            const isProductTypeActive = activeType === productType;
            const isLastProductType = productTypes.length - 1 === index;
            const isFirstProductType = index === 0;

            return (
              <ProductTypeChip
                $active={isProductTypeActive}
                $isFirst={isFirstProductType}
                $isLast={isLastProductType}
                key={productType}
                onClick={() => handleProductTypeChipClick(productType)}
              >
                <ParagraphLarge
                  color={isProductTypeActive ? "white" : "primary"}
                >
                  {productType}
                </ParagraphLarge>
              </ProductTypeChip>
            );
          })}
        </ProductTypesContainer>
        <CenteredContainer>
          <ProductsContainer>
            {filteredCatalogProducts.map(({ image, name, price }) => (
              <ProductCardContainer key={name}>
                <ProductCard image={image} name={name} price={price} />
              </ProductCardContainer>
            ))}
          </ProductsContainer>
        </CenteredContainer>
      </Main>
    </>
  );
};
