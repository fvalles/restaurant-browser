import { Link } from "react-router-dom";
import { RestaurantLogo } from "../../components/restaurant-logo";
import { RestaurantInformation } from "../../components/restaurant-information";
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
import { ProductTypes } from "../../components/product-types";
import { ButtonText } from "../../components/typography";
import { ConfirmPurchaseModal } from "../../components/confirm-purchase-modal";
import { AnimatedLayout } from "../../components/animated-layout";
import { Loading } from "../../components/loading";
import { EmptyState } from "../../components/empty-state";
import { useRestaurantCatalog } from "../../hooks/use-restaurant-catalog";
import { Header } from "../../components/header";

/**
 * Constants
 */

const BANNER_ICON_SIZE = 32;

const RESTAURANT_LOGO_SIZE = 74;

/**
 * RestaurantCatalog Page
 */

export const RestaurantCatalog = () => {
  const {
    activeType,
    animationFinish,
    bannerSrc,
    cart,
    data,
    distance,
    error,
    handleCloseModal,
    handleOpenModal,
    handleProductTypeClick,
    handlePurchase,
    isModalOpen,
    isPending,
    isRefetching,
    logoAlt,
    logoSrc,
    name,
    ratingAverage,
    ratingTotal,
    refetch,
    restaurantId,
    setAnimationFinish,
    totalPrice,
  } = useRestaurantCatalog();

  if (isRefetching || isPending || !animationFinish)
    return (
      <Loading
        onLoopComplete={() => {
          setAnimationFinish(true);
        }}
      />
    );

  if (error || !data)
    return (
      <EmptyState
        refetch={() => {
          refetch();
          setAnimationFinish(false);
        }}
      />
    );

  const { catalogProducts, productTypes } = getCatalogProducts(data);

  const filteredCatalogProducts = catalogProducts.filter(
    ({ type }) => activeType === "" || type === activeType
  );

  return (
    <AnimatedLayout>
      <Header />
      <Banner $bannerSrc={bannerSrc}>
        <BannerIconsContainer>
          <Link to={Route.HOME}>
            <Icon name="back_arrow" size={BANNER_ICON_SIZE} />
          </Link>
          <RightBannerIconsContainer>
            <Link to={`${Route.SEARCH}/${restaurantId}`}>
              <Icon name="search_filled" size={BANNER_ICON_SIZE} />
            </Link>
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
            distance={distance}
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
          <TotalOrderButton $isVisible={!!totalPrice} onClick={handleOpenModal}>
            <ButtonText color="white">TOTAL ({totalPrice} €)</ButtonText>
          </TotalOrderButton>
        </CenteredContainer>
        <ConfirmPurchaseModal
          cart={cart}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onPurchase={handlePurchase}
          totalOrderPrice={totalPrice}
        />
      </Main>
    </AnimatedLayout>
  );
};
