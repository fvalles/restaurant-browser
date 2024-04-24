import styled from "styled-components";
import { TypographyProps, baseStyles } from "./common";

export const Button = styled.p<TypographyProps>`
  ${baseStyles};
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
`;