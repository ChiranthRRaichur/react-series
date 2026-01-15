import RestaurantCards from "./RestaurantCards";
import SearchBar from "./SearchBar";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useBody from "../utils/useBody";

const Body = () => {
  const {
    resList,
    filteredRestaurants,
    searchText,
    setSearchText,
    handleSearch,
    handleTopRated,
  } = useBody();

  const isOnline = useOnlineStatus();

  // Offline UI
  if (!isOnline) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center p-4">
        <h1 className="text-4xl mb-2">⚠️</h1>
        <h2 className="text-2xl font-bold text-gray-800">You are offline</h2>
        <p className="text-gray-600 mt-2">
          Please check your internet connection and try again.
        </p>
      </div>
    );
  }

  // Shimmer Loader
  if (resList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search and Filters Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <div className="w-full md:w-auto">
          <SearchBar
            searchText={searchText}
            setSearchText={setSearchText}
            onSearch={handleSearch}
          />
        </div>

        <button
          className="px-6 py-2.5 bg-orange-500 text-white font-medium rounded-lg shadow-md hover:bg-orange-600 transition-all duration-200 active:scale-95"
          onClick={handleTopRated}
        >
          Top Rated Restaurants
        </button>
      </div>

     {/* Restaurant Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {filteredRestaurants.map((restaurant) => (
    <Link
      key={restaurant.info.id}
      to={`/restaurant/${restaurant.info.id}`}
      className="flex flex-col p-4 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 bg-white group"
    >
      <RestaurantCards resData={restaurant} />
    </Link>
  ))}
</div>
    </div>
  );
};

export default Body;
