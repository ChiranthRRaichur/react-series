import RestaurantCards from "./RestaurantCards";
import restaurantList from "../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";

const Body = () => {
    const [resList, setresList] = useState(restaurantList)   //intializing the state with restaurantList JSON data and this is array destructuring
    return(
        <div className="bodyContainer">
            <div className="searchContainer">   
                <button className="Filter-Button" onClick={()=>{
                    //console.log("Clicked");
                    const res = restaurantList.filter((res)=> res.info.rating.aggregate_rating > 4.0)
                    //console.log(res);
                    setresList(res);
                }}> Top Rated Restaurants</button>
            </div>
            <div className="restaurantGrid">
                {/* {console.log("reslist: ",resList)} */}
                {resList.map((restaurant) => <RestaurantCards key={restaurant.info.resId} resData = {restaurant} /> )}
                
            </div>
        </div>
    )
}

export default Body;