import { RESTAURANT_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, cloudinaryImageId, costForTwo, avgRating } =
    resData?.info;
  return (
    <div className="res-card">
      <img src={RESTAURANT_CDN_URL + cloudinaryImageId} className="res-img" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>&#9733;{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
