import { useParams } from "react-router-dom";
import MenuShimmer from "./MenuShimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) return <MenuShimmer />;

  const { name, cuisines, rating } = resInfo;

  return (
    <div className="max-w-3xl mx-auto p-4 pt-8">
      {/* Restaurant Header */}
      <header className="border-b-2 border-dashed border-gray-200 pb-8 mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{name}</h1>
        
        <div className="flex items-center gap-4 text-sm font-semibold">
          <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-0.5 rounded shadow-sm">
            <span>★</span>
            <span>{rating}</span>
          </div>
          <span className="text-gray-400">|</span>
          <p className="text-gray-600 italic">
            {cuisines?.join(", ")}
          </p>
        </div>
      </header>

      <h3 className="text-xl font-black text-gray-800 uppercase tracking-tighter mb-6 flex items-center gap-2">
        <span className="w-1.5 h-6 bg-orange-500 rounded-full"></span>
        Menu Items
      </h3>

      {/* Menu Categories */}
      {resInfo.menu.map((category) => (
        <section className="mb-10" key={category.name}>
          <h2 className="text-lg font-bold text-gray-800 mb-6 bg-gray-50 p-3 rounded-lg border-l-4 border-gray-300">
            {category.name} ({category.items.length})
          </h2>

          <ul className="space-y-0">
            {category.items.map((item) => (
              <li 
                className="flex justify-between items-start py-8 border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors px-2 rounded-xl" 
                key={item.id}
              >
                {/* Item Details (Left) */}
                <div className="flex-1 pr-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] border px-1 rounded-sm ${item.is_veg ? "border-green-500 text-green-500" : "border-red-500 text-red-500"}`}>
                      {item.is_veg ? "回" : "回"}
                    </span>
                    <h4 className="font-bold text-gray-800 text-lg">{item.name}</h4>
                  </div>
                  
                  <p className="font-semibold text-gray-700 text-sm mb-2">
                    ₹{item.price_inr}
                  </p>
                  
                  <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>

                {/* Item Actions (Right) */}
                <div className="relative flex flex-col items-center">
                  <div className="w-32 h-32 bg-gray-100 rounded-2xl overflow-hidden shadow-inner">
                    <img 
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                      onError={(e) => e.target.style.display = 'none'} // Hides broken images
                    />
                  </div>
                  <button className="absolute -bottom-2 bg-white text-green-600 font-bold px-8 py-2 rounded-lg shadow-md border border-gray-200 hover:bg-gray-50 transition-all active:scale-90 uppercase text-xs">
                    Add
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default RestaurantMenu;