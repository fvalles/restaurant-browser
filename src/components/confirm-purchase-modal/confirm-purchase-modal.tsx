import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import {
  ParagraphExtraLarge,
  ParagraphLarge,
  ParagraphMedium,
} from "../typography";
import styled from "styled-components";
import { CartItem } from "../../stores/cart-store";
import { Link } from "react-router-dom";
import { Route } from "../../routes";

/**
 * Types
 */

interface ConfirmPurchaseModalProps {
  cart: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onPurchase: () => void;
  totalOrderPrice: number;
}

/**
 * Styled Components
 */

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const CancelButton = styled.button`
  border: 1px solid ${({ theme }) => theme.Colors.primary};
  padding: 10px;
`;

const CartItemContainer = styled.div`
  margin-bottom: 5px;
`;

const ConfirmPurchaseButton = styled.button`
  background-color: ${({ theme }) => theme.Colors.primary};
  padding: 10px;
`;

const SubtitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0px 20px;
`;

const TotalPriceContainer = styled.div`
  margin-top: 5px;
`;

/**
 * ConfirmPurchaseModal Component
 */

export const ConfirmPurchaseModal = ({
  cart,
  isOpen,
  onClose,
  onPurchase,
  totalOrderPrice,
}: ConfirmPurchaseModalProps) => (
  <Modal open={isOpen} onClose={onClose} center>
    <TitleContainer>
      <ParagraphExtraLarge>Confirmar Compra</ParagraphExtraLarge>
    </TitleContainer>
    <SubtitleContainer>
      <ParagraphLarge>
        ¿Estás seguro que querés confirmar la siguiente compra?
      </ParagraphLarge>
    </SubtitleContainer>
    {cart.map(({ count, name, price }) => {
      const cartItemTotalPrice = Number(price * count).toFixed(2);

      return (
        <CartItemContainer>
          <ParagraphMedium>
            {name} x {count} = {cartItemTotalPrice} €
          </ParagraphMedium>
        </CartItemContainer>
      );
    })}
    <hr />
    <TotalPriceContainer>
      <ParagraphLarge>Total = {totalOrderPrice} €</ParagraphLarge>
    </TotalPriceContainer>
    <ButtonsContainer>
      <CancelButton onClick={onClose}>
        <ParagraphLarge fontWeight={500}>CANCELAR</ParagraphLarge>
      </CancelButton>
      <Link
        onClick={() => {
          onClose();
          onPurchase();
        }}
        to={Route.HOME}
      >
        <ConfirmPurchaseButton>
          <ParagraphLarge color="white" fontWeight={500}>
            CONFIRMAR
          </ParagraphLarge>
        </ConfirmPurchaseButton>
      </Link>
    </ButtonsContainer>
  </Modal>
);