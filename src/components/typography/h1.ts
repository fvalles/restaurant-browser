import styled from "styled-components";
import { TypographyProps, baseStyles } from "./common";

export const H1 = styled.h1<TypographyProps>`
  ${baseStyles};
  font-size: 18px;
  line-height: 18px;
  font-weight: 500;
`;
