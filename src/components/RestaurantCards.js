const RestaurantCards = ( props) => {
    const {resData} = props; // Destructuring the Props
    const {name, cloudinaryImageId, avgRating, cuisines} = resData?.info  || {};;    // Destructuring the Props & Optional Chaining and fallback handling
    return(
        <div className="restaurantCards">
            <div className="card">
                <img className="card-img" src={cloudinaryImageId} alt="🍔"></img>
                <h3>{name}</h3>
                <p>Rating: {avgRating}</p>
                <p> {cuisines.map((cuisine) => cuisine).join(", ")}</p>
            </div>
        </div>
    )
}

export default RestaurantCards;