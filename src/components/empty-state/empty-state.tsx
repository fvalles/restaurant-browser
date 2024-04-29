import styled from "styled-components";
import {
  ParagraphExtraLarge,
  ParagraphMedium,
} from "../../components/typography";
import { Button } from "../../components/button";
import { ButtonType } from "../../components/button";

/**
 * Types
 */

interface EmptyStateProps {
  refetch: () => void;
}

/**
 * Styled Components
 */

const EmptyStateContainer = styled.main`
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
 * EmptyState Component
 */

export const EmptyState = ({ refetch }: EmptyStateProps) => (
  <EmptyStateContainer>
    <TitleContainer>
      <ParagraphExtraLarge>Oops!</ParagraphExtraLarge>
    </TitleContainer>
    <SubtitleContainer>
      <ParagraphMedium>
        Se produjo un error inesperado :(
      </ParagraphMedium>
    </SubtitleContainer>
    <Button onClick={refetch} title="Reintentar" type={ButtonType.REGULAR} />
  </EmptyStateContainer>
);
