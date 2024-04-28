import { Link, useParams } from "react-router-dom";
import { useCartStore, useRestaurantStore } from "../../stores";
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
  ProductsContainer,
  RestaurantInformationContainer,
  RightBannerIconsContainer,
  StarIconContainer,
  TotalOrderButton,
} from "./styled-components";
import { useState } from "react";
import { ProductTypes } from "../../components/product-types";
import { ButtonText } from "../../components/typography";

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
  const { totalPrice } = useCartStore();

  const logoAlt = `${name} logo`;

  if (isPending) return <></>;

  if (error) return <></>;

  const { catalogProducts, productTypes } = getCatalogProducts(data);

  const filteredCatalogProducts = catalogProducts.filter(
    ({ type }) => activeType === "" || type === activeType
  );

  const handleProductTypeClick = (productType: string) => {
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
        <ProductTypes
          activeType={activeType}
          onClick={handleProductTypeClick}
          productTypes={productTypes}
        />
        <CenteredContainer>
          <ProductsContainer $isOrderButtonVisible={!!totalPrice}>
            {filteredCatalogProducts.map(({ image, name, price }) => (
              <ProductCardContainer key={name}>
                <ProductCard image={image} name={name} price={price} />
              </ProductCardContainer>
            ))}
          </ProductsContainer>
          <TotalOrderButton $isVisible={!!totalPrice}>
            <ButtonText color="white">TOTAL ({totalPrice} €)</ButtonText>
          </TotalOrderButton>
        </CenteredContainer>
      </Main>
    </>
  );
};
