import styled from "styled-components";
import { TypographyProps, baseStyles } from "./common";

/**
 * Types
 */

interface ParagraphLargeProps extends TypographyProps {
  fontWeight?: number;
}

/**
 * ParagraphLarge Component
 */

export const ParagraphLarge = styled.p<ParagraphLargeProps>`
  ${baseStyles};
  font-size: 14px;
  line-height: 18px;
  font-weight: ${({ fontWeight }) => fontWeight ?? 400};
`;
