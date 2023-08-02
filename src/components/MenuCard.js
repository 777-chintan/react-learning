import { styled } from "styled-components";
import { CDN_URL } from "../utils/constants";

const MenuCard = (props) => {
  const { menuItem } = props;
  const { name, imageId, price, defaultPrice, description } =
    menuItem?.card?.info;
  return (
    <ItemContainer>
      <ItemInfo>
        <ItemTitle>{name}</ItemTitle>
        <ItemPrice>₹{price / 100 || defaultPrice / 100}</ItemPrice>
        <ItemDetail>{description}</ItemDetail>
      </ItemInfo>
      {imageId ? <ItemImage src={CDN_URL + imageId} /> : null}
    </ItemContainer>
  );
};

export default MenuCard;

const ItemContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 0.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid lightgray;
`;
const ItemInfo = styled.div`
  width: 75%;
`;
const ItemImage = styled.img`
  width: 25%;
  border-radius: 0.5rem;
  object-fit: cover;
`;
const ItemTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.25rem;
`;
const ItemPrice = styled.p`
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 0.25rem;
`;
const ItemDetail = styled.p`
  font-size: 0.9rem;
  margin-top: 0.25rem;
`;
