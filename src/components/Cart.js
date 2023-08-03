import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import MenuCard from "./MenuCard";
import { clearCart } from "../utils/redux/slice/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  return (
    <Container>
      <Title>Cart</Title>
      <Clear
        onClick={() => {
          dispatch(clearCart());
        }}
      >
        Clear Cart
      </Clear>
      {cartItems.map((menuItem) => (
        <MenuCard menuItem={menuItem} key={menuItem?.card?.info?.id} />
      ))}
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  width: 50%;
  margin: auto;
  padding: 1rem;
  margin-top: 1rem;
  background-color: #f0f0f0;
`;

const Title = styled.h3`
  text-align: center;
  font-weight: bold;
  font-size: 1.75rem;
`;

const Clear = styled.button`
  margin-right: auto;
  background-color: black;
  padding: 0.5rem;
  color: white;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
`;
