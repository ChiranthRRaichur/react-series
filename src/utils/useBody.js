import { useState, useEffect } from "react";

const useBody = () => {
  const [resList, setResList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9121181&lng=77.6445548&is-seo-homepage-enabled=true"
      );
      const json = await data.json();

      const restaurants =
        json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setResList(restaurants);
      setFilteredRestaurants(restaurants);
    };

    fetchData();
  }, []);

  //  Search handler
  const handleSearch = () => {
    const filtered = resList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  // Top rated handler
  const handleTopRated = () => {
    const filtered = resList.filter(
      (res) => res.info.avgRating > 4.5
    );
    setFilteredRestaurants(filtered);
  };

  return {
    resList,
    filteredRestaurants,
    searchText,
    setSearchText,
    handleSearch,
    handleTopRated
  };
};

export default useBody;
