


const RestaurantCards = ( props) => {
    const {resData} = props; // Destructuring the Props
    const {name, image, rating, cuisine} = resData?.info  || {};;    // Destructuring the Props & Optional Chaining and fallback handling
    return(
        <div className="restaurantCards">
            <div className="card">
                <img className="card-img" src={image.url} alt="🍔"></img>
                <h3>{name}</h3>
                <p>Rating: {rating.aggregate_rating}</p>
                <p> {cuisine.map((cuisine) => cuisine.name).join(", ")}</p>
            </div>
        </div>
    )
}

export default RestaurantCards;