import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchCatalog } from "../../queries/use-fetch-catalog";
import { Loading } from "../../components/loading";
import { EmptyState } from "../../components/empty-state";
import { ChangeEvent, useState } from "react";
import { getCatalogProducts } from "../../helpers/get-catalog-products";
import { Icon } from "../../components/icon";
import { MEDIA } from "../../constants/media-queries";
import { useCartStore } from "../../stores";
import { Route } from "../../routes";
import { SearchProductRow } from "../../components/search-product-row";
import { toast } from "react-toastify";

/**
 * Styled Components
 */

const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;

  ${MEDIA.PHONE} {
    padding: 40px 30px;
  }

  ${MEDIA.TABLET} {
    padding: 40px 50px;
  }

  ${MEDIA.DESKTOP} {
    padding: 40px 80px;
  }
`;

const SearchBarContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.lightGrey};
  border-radius: 10px;
  margin-bottom: 40px;
  padding: 0px 30px;
  display: flex;
  height: 48px;
  width: 100%;
`;

const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.Colors.lightGrey};
  border: none;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  line-height: 18px;
  margin: 0px 20px;
  width: 100%;
`;

/**
 * Search Page
 */

export const Search = () => {
  const { restaurantId } = useParams();
  const [animationFinish, setAnimationFinish] = useState(false);
  // fetch already cached catalog
  const { data, error, isPending, isRefetching, refetch } =
    useFetchCatalog(restaurantId);
  const [searchedProduct, setSearchedProduct] = useState("");
  const { add } = useCartStore();
  const navigate = useNavigate();

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

  const { catalogProducts } = getCatalogProducts(data);
  const searchResult = catalogProducts.filter(({ name }) =>
    name.toLowerCase().includes(searchedProduct.toLowerCase())
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchedProduct(event.target.value);
  };

  const handleCancelClick = () => {
    setSearchedProduct("");
  };

  const handleProductClick = (productName: string, productPrice: number) => {
    navigate(`/${Route.RESTAURANT_CATALOG}/${restaurantId}`);
    toast("Producto agregado al carrito", {
      position: "top-center",
      toastId: "search-product-add",
    });
    add({ name: productName, price: productPrice });
  };

  return (
    <Main>
      <SearchBarContainer>
        <Icon name="search" size={22} />
        <StyledInput
          type="text"
          id="productName"
          name="productName"
          onChange={handleChange}
          placeholder="Buscar producto.."
          value={searchedProduct}
        />
        <button onClick={handleCancelClick}>
          <Icon name="cancel" size={32} />
        </button>
      </SearchBarContainer>
      {searchResult.map(({ image, name, price }) => (
        <SearchProductRow
          key={name}
          image={image}
          name={name}
          onClick={() => handleProductClick(name, price)}
          price={price}
        />
      ))}
    </Main>
  );
};
