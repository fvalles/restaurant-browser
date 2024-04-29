import Lottie from "lottie-react";
import loading from "../../assets/animations/loading.json";
import styled from "styled-components";

/**
 * Types
 */

interface LoadingProps {
  onLoopComplete?: () => void;
}

/**
 * Styled Components
 */

const LoadingContainer = styled.main`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

/**
 * Loading Component
 */

export const Loading = ({ onLoopComplete }: LoadingProps) => (
  <LoadingContainer>
    <Lottie
      animationData={loading}
      onLoopComplete={onLoopComplete}
      style={{ height: 300 }}
    />
  </LoadingContainer>
);
