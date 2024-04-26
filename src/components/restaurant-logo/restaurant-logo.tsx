import styled from "styled-components";

/**
 * Types
 */

interface RestaurantLogoProps {
  alt: string;
  size: number;
  src: string;
}

/**
 * Styled Components
 */

const LogoImage = styled.img<{ $size: number }>`
  background-color: ${({ theme }) => theme.Colors.white};
  border-radius: 15px;
  height: ${({ $size }) => `${$size}px`};
  width: ${({ $size }) => `${$size}px`};
`;

/**
 * RestaurantLogo Component
 */

export const RestaurantLogo = ({ alt, size, src }: RestaurantLogoProps) => (
  <LogoImage src={src} alt={alt} $size={size} />
);
