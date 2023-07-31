import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuCard from "./MenuCard";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";

const ResMenuContainer = () => {
  const { resId } = useParams();
  const resDetails = useRestaurantMenu(resId);

  if (resDetails === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwo, avgRating, avgRatingString } =
    resDetails?.[0]?.card?.card?.info;
  const menuCards = resDetails[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
    (c) =>
      c.card?.card?.itemCards && c.card?.card?.itemCards?.length != 0
        ? true
        : false
  );

  return (
    <div>
      <div>
        <div>
          <h3>{name}</h3>
          <h4>
            {avgRating ? <>&#9733;</> : null}
            {avgRatingString}
          </h4>
        </div>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
      </div>
      <div>
        {menuCards.map((item) => (
          <div key={item?.card?.card?.title}>
            <h4>{item?.card?.card?.title}</h4>
            <div className="menu">
              {item?.card?.card?.itemCards.map((menuItem) => (
                <MenuCard menuItem={menuItem} key={menuItem?.card?.info?.id} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResMenuContainer;
