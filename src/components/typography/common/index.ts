import { css } from "styled-components";
import { KeyColors } from "../../../core/theme/colors";

/**
 * Types
 */

export interface TypographyProps {
  /** Text color */
  color?: KeyColors;
}

/**
 * Constants
 */

export const baseStyles = css<TypographyProps>`
  ${({ color = "primary", theme }) => `
    color: ${theme.Colors[color]};
`}
  font-family: "Poppins", sans-serif;
`;
