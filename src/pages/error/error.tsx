import styled from "styled-components";
import {
  ParagraphExtraLarge,
  ParagraphMedium,
} from "../../components/typography";
import notFoundImage from "../../assets/images/404-not-found.png";
import { Link } from "react-router-dom";
import { Route } from "../../routes";
import { Button } from "../../components/button";
import { ButtonType } from "../../components/button";

/**
 * Styled Components
 */

const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

const SubtitleContainer = styled.main`
  margin-bottom: 20px;
`;

const TitleContainer = styled.main`
  margin: 20px 0px;
`;

/**
 * Error Page
 */

export const Error = () => (
  <Main>
    <img height={300} width={485} src={notFoundImage} alt="Last app logo" />
    <TitleContainer>
      <ParagraphExtraLarge>404 - Página no encontrada</ParagraphExtraLarge>
    </TitleContainer>
    <SubtitleContainer>
      <ParagraphMedium>
        La página que estás buscando no se encuentra disponible
      </ParagraphMedium>
    </SubtitleContainer>
    <Link to={Route.HOME}>
      <Button title="Ir a la página principal" type={ButtonType.REGULAR} />
    </Link>
  </Main>
);
