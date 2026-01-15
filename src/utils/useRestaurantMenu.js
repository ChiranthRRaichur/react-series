import { useEffect, useState } from "react";
import { dummyRestaurantMenus } from "../utils/dummy_restaurant_menus";

const useRestaurantMenu = (resId) => {
  // Placeholder for actual API call or data fetching logic

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const restaurant = dummyRestaurantMenus?.restaurants?.find(
      (r) => String(r.restaurantId) === String(resId)
    );

    setResInfo(restaurant);
    console.log("restaurant:", restaurant);
  }, [resId]);

  return resInfo;
};

export default useRestaurantMenu;
