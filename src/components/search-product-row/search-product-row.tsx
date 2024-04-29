import { useState } from "react";
import styled from "styled-components";
import defaultProductImage from "../../assets/images/default-product.svg";
import { ParagraphLarge } from "../typography";
import { Icon } from "../icon";

/**
 * Types
 */

interface SearchProductRowProps {
  image: string;
  name: string;
  onClick: () => void;
  price: number;
}

/**
 * Styled Components
 */

const ProductImage = styled.img`
  height: 60px;
  width: 75px;
`;

const ProductImageContainer = styled.div`
  align-items: center;
  border-radius: 9px;
  box-shadow: ${({ theme }) => theme.Colors.shadow} 0px 0px 4px 0px;
  display: flex;
  height: 75px;
  justify-content: center;
  margin-right: 20px;
  width: 75px;
`;

const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const ProductNameContainer = styled.div`
  margin-bottom: 5px;
`;

const ProductRow = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 20px;
  height: 75px;
  width: 100%;
`;

/**
 * SearchProductRow Component
 */

export const SearchProductRow = ({
  image,
  name,
  onClick,
  price,
}: SearchProductRowProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <ProductRow>
      <ProductImageContainer>
        <ProductImage
          alt={name}
          src={imageError ? defaultProductImage : image}
          onError={() => setImageError(true)}
        />
      </ProductImageContainer>
      <ProductInfoContainer>
        <ProductNameContainer>
          <ParagraphLarge>{name}</ParagraphLarge>
        </ProductNameContainer>
        <ParagraphLarge fontWeight={600}>{price} €</ParagraphLarge>
      </ProductInfoContainer>
      <button onClick={onClick}>
        <Icon name="forward_arrow" size={32} />
      </button>
    </ProductRow>
  );
};
