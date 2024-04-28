import styled from "styled-components";
import { ParagraphLarge } from "../typography";

/**
 * Types
 */

interface ProductTypeChipProps {
  $active?: boolean;
  $isFirst?: boolean;
  $isLast?: boolean;
}

interface ProductTypesProps {
  activeType: string;
  onClick: (productType: string) => void;
  productTypes: string[];
}

/**
 * Styled Components
 */

export const ProductTypeChip = styled.button<ProductTypeChipProps>`
  background-color: ${({ $active, theme }) =>
    $active ? theme.Colors.primary : theme.Colors.white};
  border: 1px solid ${({ theme }) => theme.Colors.white};
  border-radius: 25px;
  margin-left: ${({ $isFirst }) => ($isFirst ? "20px" : "10px")};
  margin-right: ${({ $isLast }) => ($isLast ? "20px" : "0px")};
  padding: 10px 12px;

  &:hover {
    background-color: ${({ $active, theme }) =>
      $active ? theme.Colors.primary : theme.Colors.lightGrey};
    border: 1px solid
      ${({ $active, theme }) =>
        $active ? theme.Colors.white : theme.Colors.black};
  }
`;

export const ProductTypesContainer = styled.div`
  display: flex;
  margin-top: 20px;
  overflow: auto;
  white-space: nowrap;
`;

/**
 * ProductTypes Component
 */

export const ProductTypes = ({
  activeType,
  onClick,
  productTypes,
}: ProductTypesProps) => (
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
          onClick={() => onClick(productType)}
        >
          <ParagraphLarge color={isProductTypeActive ? "white" : "primary"}>
            {productType}
          </ParagraphLarge>
        </ProductTypeChip>
      );
    })}
  </ProductTypesContainer>
);
