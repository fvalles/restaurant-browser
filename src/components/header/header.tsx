import styled from "styled-components";
import lastAppLogo from "../../assets/images/content-header.svg";

/**
 * Styled Components
 */

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.Colors.primary};
  padding: 20px;
`;

/**
 * Header Component
 */

export const Header = () => (
  <StyledHeader>
    <img src={lastAppLogo} alt="Last app logo" />
  </StyledHeader>
);
