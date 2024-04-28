import styled from "styled-components";
import { ParagraphLarge } from "../typography";
import defaultProductImage from "../../assets/images/default-product.svg";
import { useState } from "react";
import { Icon } from "../icon";
import { useCartStore } from "../../stores";

/**
 * Types
 */

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
}

type ProductCountProps = { $isVisible: boolean };
type SubstractProductButtonProps = ProductCountProps;

/**
 * Styled Components
 */

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 178px;
  width: 152px;
`;

const NameContainer = styled.div`
  margin-top: 10px;
`;

const PriceAndQuantityContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;

const ProductCount = styled(ParagraphLarge)<ProductCountProps>`
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
`;

const ProductImage = styled.img`
  box-shadow: ${({ theme }) => theme.Colors.shadow} 0px 0px 4px 0px;
  border-radius: 9px;
  height: 120px;
  width: 152px;
`;

const QuantityButtonsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 72px;
`;

const SubstractProductButton = styled.button<SubstractProductButtonProps>`
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
`;

/**
 * ProductCard Component
 */

export const ProductCard = ({ image, name, price }: ProductCardProps) => {
  const [imageError, setImageError] = useState(false);
  const { add, cart, remove } = useCartStore();
  const imageAlt = `${name} product image`;

  const cartProduct = cart.filter((cartItem) => cartItem.name === name);
  const productCount = cartProduct.length ? cartProduct[0].count : 0;

  return (
    <CardContainer>
      <ProductImage
        alt={imageAlt}
        src={imageError ? defaultProductImage : image}
        onError={() => setImageError(true)}
      />
      <NameContainer>
        <ParagraphLarge>{name}</ParagraphLarge>
      </NameContainer>
      <PriceAndQuantityContainer>
        <ParagraphLarge fontWeight={600}>{price} €</ParagraphLarge>
        <QuantityButtonsContainer>
          <SubstractProductButton
            onClick={() => {
              remove(name);
            }}
            $isVisible={!!productCount}
          >
            <Icon name="minus" size={22} />
          </SubstractProductButton>
          <ProductCount fontWeight={400} $isVisible={!!productCount}>
            {productCount}
          </ProductCount>
          <button
            onClick={() => {
              add({ name, price });
            }}
          >
            <Icon name="plus" size={22} />
          </button>
        </QuantityButtonsContainer>
      </PriceAndQuantityContainer>
    </CardContainer>
  );
};
