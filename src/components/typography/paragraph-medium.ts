import styled from "styled-components";
import { TypographyProps, baseStyles } from "./common";

export const ParagraphMedium = styled.p<TypographyProps>`
  ${baseStyles};
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
`;
