import RestaurantCards from "./RestaurantCards";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9121181&lng=77.6445548&is-seo-homepage-enabled=true"
    );
    const json = await data.json();

    //optional chaining
    const restaurants =
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setResList(restaurants);
    setFilteredRestaurants(restaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    const filtered = resList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  const handleTopRated = () => {
    const filtered = resList.filter((res) => res.info.avgRating > 4.5);
    setFilteredRestaurants(filtered);
  };

  if (resList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="bodyContainer">
      <div className="searchContainer">
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          onSearch={handleSearch}
        />
      </div>

      <div className="searchContainer">
        <button className="Filter-Button" onClick={handleTopRated}>
          Top Rated Restaurants
        </button>
      </div>

      <div className="restaurantGrid">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurant/${restaurant.info.id}`}
            className="card-link"
          >
            <RestaurantCards resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
