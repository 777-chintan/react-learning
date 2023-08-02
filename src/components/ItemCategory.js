import { styled } from "styled-components";
import MenuCard from "./MenuCard";

const ItemCategory = ({
  item,
  index,
  setExpandedItemCategoryIndex,
  expandedItemCategoryIndex,
}) => {
  const { title, itemCards } = item?.card?.card;

  const handleOpenItems = () => {
    if (index === expandedItemCategoryIndex) {
      setExpandedItemCategoryIndex(null);
    } else {
      setExpandedItemCategoryIndex(index);
    }
  };

  return (
    <ItemCategoryContainer>
      <ItemCategoryHeader onClick={handleOpenItems}>
        <ItemCategoryTitle>{title}</ItemCategoryTitle>
        <span>🔽</span>
      </ItemCategoryHeader>
      {expandedItemCategoryIndex === index
        ? itemCards?.map((menuItem) => (
            <MenuCard menuItem={menuItem} key={menuItem?.card?.info?.id} />
          ))
        : null}
    </ItemCategoryContainer>
  );
};

export default ItemCategory;

const ItemCategoryContainer = styled.div`
  background-color: #f0f0f0;
  margin-top: 1rem;
  border-radius: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;
const ItemCategoryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
  cursor: pointer;
`;
const ItemCategoryTitle = styled.h4`
  font-size: 1.5rem;
  margin: 0;
`;
