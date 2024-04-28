import styled from "styled-components";
import { TypographyProps, baseStyles } from "./common";

export const ButtonText = styled.p<TypographyProps>`
  ${baseStyles};
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  text-transform: uppercase;
`;
