import styled from "styled-components";

/**
 * Types
 */

export enum IconType {
  back_arrow = "back_arrow",
  cancel = "cancel",
  forward_arrow = "forward_arrow",
  location = "location",
  minus = "minus",
  plus = "plus",
  star = "star",
  star_filled = "star_filled",
  search = "search",
  search_filled = "search_filled",
}

interface IconProps {
  name: keyof typeof IconType;
  size: number;
}

/**
 * Styled Components
 */

const IconImage = styled.img<{ $size: number }>`
  height: ${({ $size }) => `${$size}px`};
  width: ${({ $size }) => `${$size}px`};
`;

/**
 * Icon Component
 */

export const Icon = ({ name, size }: IconProps) => {
  const altIcon = `${name} icon`;

  return (
    <IconImage
      alt={altIcon}
      $size={size}
      src={require(`../../assets/images/icons/${name}.svg`)}
    />
  );
};
