import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RES_LIST_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchRestaurant = async () => {
    try {
      const data = await fetch(RES_LIST_URL);
      const jsonData = await data.json();
      setResList(
        jsonData?.data?.cards?.[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredResList(
        jsonData?.data?.cards?.[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {}
  };
  useEffect(() => {
    fetchRestaurant();
  }, []);

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
