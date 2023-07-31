import { useEffect, useState } from "react";
import { RES_LIST_URL } from "../constants";

const useRestaurantList = () => {
  const [resList, setResList] = useState([]);
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

  return resList;
};

export default useRestaurantList;
