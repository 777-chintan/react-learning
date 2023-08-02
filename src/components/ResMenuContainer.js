import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";
import { styled } from "styled-components";
import { CDN_URL } from "../utils/constants";
import ItemCategory from "./ItemCategory";

const ResMenuContainer = () => {
  const { resId } = useParams();
  const resDetails = useRestaurantMenu(resId);

  const [expandedItemCategoryIndex, setExpandedItemCategoryIndex] = useState(0);

  if (resDetails === null) {
    return <Shimmer />;
  }

  const { name, cuisines, cloudinaryImageId } =
    resDetails?.[0]?.card?.card?.info;
  const menuCards = resDetails[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ? true
        : false
  );

  return (
    <Container>
      <RestaurantInfoCard>
        <RestaurantBackgroundImage src={CDN_URL + cloudinaryImageId} />
        <RestaurantInfoDetails>
          <ResTitle>{name}</ResTitle>
          <ResCuisines>{cuisines.join(", ")}</ResCuisines>
        </RestaurantInfoDetails>
      </RestaurantInfoCard>
      <MenuContainer>
        {menuCards.map((item, index) => (
          <ItemCategory
            key={item?.card?.card?.title}
            item={item}
            index={index}
            setExpandedItemCategoryIndex={setExpandedItemCategoryIndex}
            expandedItemCategoryIndex={expandedItemCategoryIndex}
          />
        ))}
      </MenuContainer>
    </Container>
  );
};

export default ResMenuContainer;

const Container = styled.div`
  width: 50%;
  margin: auto;
  @media only screen and (max-width: 852px) {
    padding: 4px !important;
    width: 100%;
  }
`;
const RestaurantInfoCard = styled.div`
  text-align: center;
  height: 60vh;
  position: relative;
  background: tranparent;
  margin-top: 1rem;
`;
const RestaurantInfoDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
`;
const RestaurantBackgroundImage = styled.img`
  position: absolute;
  opacity: 0.7;
  z-index: -10;
  height: 100%;
  width: 100%;
  left: 0;
  object-fit: cover;
  border-radius: 1rem;
`;
const ResTitle = styled.h3`
  font-size: 3rem;
  margin-bottom: 0.25rem;
`;
const ResCuisines = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
  margin-top: 0.25rem;
`;
const MenuContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
