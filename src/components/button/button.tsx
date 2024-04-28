import styled from "styled-components";
import { ParagraphLarge } from "../typography";

/**
 * Types
 */

export enum ButtonType {
  OUTLINE = "OUTLINE",
  REGULAR = "REGULAR",
}

interface ButtonProps {
  onClick?: () => void;
  title: string;
  type: ButtonType;
}

/**
 * Styled Components
 */

const StyledButton = styled.button<{ $type: ButtonType }>`
  background-color: ${({ theme, $type }) =>
    $type === ButtonType.REGULAR ? theme.Colors.primary : theme.Colors.white};
  border: ${({ theme, $type }) =>
    $type === ButtonType.OUTLINE
      ? `1px solid ${theme.Colors.primary}`
      : "none"};
  padding: 10px;
`;

/**
 * Button Component
 */

export const Button = ({ onClick, title, type }: ButtonProps) => (
  <StyledButton onClick={onClick} $type={type}>
    <ParagraphLarge
      fontWeight={500}
      color={type === ButtonType.REGULAR ? "white" : "primary"}
    >
      {title}
    </ParagraphLarge>
  </StyledButton>
);
