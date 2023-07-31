import { useEffect, useState } from "react";
import { MENU_LIST_URL } from "../constants";

const useRestaurantMenu = (resId) => {
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

  return resDetails;
};

export default useRestaurantMenu;
