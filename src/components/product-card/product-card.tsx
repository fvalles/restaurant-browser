import styled from "styled-components";
import { ParagraphLarge } from "../typography";
import defaultProductImage from "../../assets/images/default-product.svg";
import { useState } from "react";

/**
 * Types
 */

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
}

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
  margin-top: 5px;
`;

const ProductImage = styled.img`
  box-shadow: ${({ theme }) => theme.Colors.shadow} 0px 0px 4px 0px;
  border-radius: 9px;
  height: 120px;
  width: 152px;
`;

/**
 * ProductCard Component
 */

export const ProductCard = ({ image, name, price }: ProductCardProps) => {
  const [imageError, setImageError] = useState(false);
  const imageAlt = `${name} product image`;

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
      </PriceAndQuantityContainer>
    </CardContainer>
  );
};
