import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dummyRestaurantMenus } from "../utils/dummy_restaurant_menus";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log("resId:", resId);

  const [menuw, setMenuw] = useState(null);

  useEffect(() => {
    const restaurant = dummyRestaurantMenus?.restaurants?.find(
      (r) => String(r.restaurantId) === String(resId)
    );

    setMenuw(restaurant);
    console.log("Restaurant Set:", restaurant);
  }, [resId]);

  if (!menuw) return <h2>Loading menu...</h2>;

  return (
  <div className="menu-page">
    <div className="menu-header">
      <h1>{menuw.name}</h1>

      <div className="menu-meta">
        <span className="menu-rating">⭐ {menuw.rating}</span>
        <span className="menu-cuisines">{menuw.cuisines.join(", ")}</span>
      </div>
    </div>

    <h3 className="menu-section-title">Menu Items</h3>

    {menuw.menu.map((category) => (
      <div className="menu-category" key={category.name}>
        <h2>{category.name}</h2>

        <ul className="menu-items">
          {category.items.map((item) => (
            <li className="menu-item" key={item.id}>
              <div className="item-left">
                <p className="item-name">{item.name}</p>
                <p className="item-desc">{item.description}</p>
              </div>

              <div className="item-right">
                <p className="item-price">₹{item.price_inr}</p>
                <span className="item-tag">{item.is_veg ? "🟢 Veg" : "🔴 Non-Veg"}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

};

export default RestaurantMenu;
