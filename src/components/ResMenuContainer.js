import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL, MENU_LIST_URL, RESTAURANT_CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import MenuCard from "./MenuCard";

const ResMenuContainer = () => {
  const { resId } = useParams();
  const [resDetails, setResDetails] = useState(null);

  useEffect(() => {
    getResMenuItems();
  }, []);

  const getResMenuItems = async () => {
    try {
      const res = await fetch(MENU_LIST_URL + resId);
      const json = await res.json();
      setResDetails(json.data.cards);
    } catch (error) {}
  };

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

  console.log("first", menuCards);
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
