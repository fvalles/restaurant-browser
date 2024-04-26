import styled from "styled-components";
import {
  ParagraphExtraLarge,
  ParagraphMedium,
  ParagraphSmall,
} from "../typography";
import { Icon } from "../icon";

/**
 * Types
 */

interface RestaurantInformationProps {
  name: string;
  ratingAverage: string;
  ratingTotal: string;
}

/**
 * Constants
 */

const ICON_SIZE = 11;

/**
 * Styled Components
 */

const DetailsContainer = styled.div`
  align-items: center;
  display: flex;
  margin-top: 5px;
`;

const NameContainer = styled.div`
  margin-top: 3px;
`;

const RatingContainer = styled.div`
  margin-right: 15px;
`;

const IconContainer = styled.div`
  align-self: center;
  display: flex;
  margin-right: 5px;
`;

/**
 * RestaurantInformation Component
 */

export const RestaurantInformation = ({
  name,
  ratingAverage,
  ratingTotal,
}: RestaurantInformationProps) => (
  <>
    <ParagraphExtraLarge>{name}</ParagraphExtraLarge>
    <NameContainer>
      <ParagraphMedium color="secondary">Comida rápida</ParagraphMedium>
    </NameContainer>
    <DetailsContainer>
      <IconContainer>
        <Icon size={ICON_SIZE} name="star" />
      </IconContainer>
      <RatingContainer>
        <ParagraphSmall color="secondary">
          {ratingAverage} ({ratingTotal})
        </ParagraphSmall>
      </RatingContainer>
      <IconContainer>
        <Icon size={ICON_SIZE} name="location" />
      </IconContainer>
      <ParagraphSmall color="secondary">1.5 km</ParagraphSmall>
    </DetailsContainer>
  </>
);
