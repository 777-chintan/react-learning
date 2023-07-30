import { useNavigate } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const navigate = useNavigate();
  const { resData } = props;
  const {
    id,
    name,
    cuisines,
    cloudinaryImageId,
    costForTwo,
    avgRating,
    avgRatingString,
  } = resData?.info;
  return (
    <div
      className="res-card"
      onClick={() => {
        navigate("/restaurant/" + id);
      }}
    >
      <img src={CDN_URL + cloudinaryImageId} className="res-img" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>
        {avgRating ? <>&#9733;</> : null}
        {avgRatingString}
      </h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
