import styled from "styled-components";
import { TypographyProps, baseStyles } from "./common";

export const ParagraphSmall = styled.p<TypographyProps>`
  ${baseStyles};
  font-size: 9px;
  line-height: 16px;
  font-weight: 400;
`;
