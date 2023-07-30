import { CDN_URL } from "../utils/constants";

const MenuCard = (props) => {
  const { menuItem } = props;
  const { id, name, imageId, price } = menuItem?.card?.info;
  return (
    <div className="menu-card">
      <div>
        <h4>{name}</h4>
        <p>Rs.{price / 100}</p>
      </div>
      <img src={CDN_URL + imageId} className="menu-img" />
    </div>
  );
};

export default MenuCard;
