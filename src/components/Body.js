import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" />
        <button>Search</button>
      </div>
      <div className="res-container">
        {resList.map((res) => (
          <RestaurantCard resData={res} key={res.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
