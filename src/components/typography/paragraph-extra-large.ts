import styled from "styled-components";
import { TypographyProps, baseStyles } from "./common";

export const ParagraphExtraLarge = styled.p<TypographyProps>`
  ${baseStyles};
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
  text-transform: uppercase;
`;
