import styled from "styled-components";
import {
  ParagraphExtraLarge,
  ParagraphMedium,
  ParagraphSmall,
} from "../typography";
import starIcon from "../../assets/images/star-icon.svg";
import locationIcon from "../../assets/images/location-icon.svg";

/**
 * Types
 */

interface RestaurantDetailsProps {
  /* image: string
    logo: string */
  name: string;
  ratingAverage: string;
  ratingTotal: string;
}

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

const Icon = styled.img`
  height: 11px;
  width: 11px;
  margin-right: 5px;
`;

/**
 * RestaurantDetails Component
 */

export const RestaurantDetails = ({
  name,
  ratingAverage,
  ratingTotal,
}: RestaurantDetailsProps) => (
  <>
    <ParagraphExtraLarge>{name}</ParagraphExtraLarge>
    <NameContainer>
      <ParagraphMedium color="secondary">Comida rápida</ParagraphMedium>
    </NameContainer>
    <DetailsContainer>
      <Icon src={starIcon} />
      <RatingContainer>
        <ParagraphSmall color="secondary">
          {ratingAverage} ({ratingTotal})
        </ParagraphSmall>
      </RatingContainer>
      <Icon src={locationIcon} />
      <ParagraphSmall color="secondary">1.5 km</ParagraphSmall>
    </DetailsContainer>
  </>
);
