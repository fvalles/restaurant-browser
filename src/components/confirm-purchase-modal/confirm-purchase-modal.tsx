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
import { Button, ButtonType } from "../button";

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

const CartItemContainer = styled.div`
  margin-bottom: 5px;
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
      <Button onClick={onClose} title="CANCELAR" type={ButtonType.OUTLINE} />
      <Link
        onClick={() => {
          onClose();
          onPurchase();
        }}
        to={Route.HOME}
      >
        <Button title="CONFIRMAR" type={ButtonType.REGULAR} />
      </Link>
    </ButtonsContainer>
  </Modal>
);
