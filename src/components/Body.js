import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useRestaurantList from "../utils/hooks/useRestaurantList";

const Body = () => {
  const resList = useRestaurantList();
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setFilteredResList(resList);
  }, [resList]);

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            let filteredRes = resList.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredResList(filteredRes);
          }}
        >
          Search
        </button>
      </div>
      {filteredResList.length ? (
        <div className="res-container">
          {filteredResList.map((res) => (
            <RestaurantCard resData={res} key={res.info.id} />
          ))}
        </div>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default Body;
