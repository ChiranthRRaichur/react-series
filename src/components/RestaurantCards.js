import { IMG_URL } from "../utils/constant";

const RestaurantCards = (props) => {
  const { resData } = props;
  const { 
    name, 
    cloudinaryImageId, 
    avgRating, 
    cuisines, 
    costForTwo, 
    sla 
  } = resData?.info || {};

  return (
    <div className="flex flex-col h-full bg-white">
      
      <div className="relative w-full aspect-video overflow-hidden rounded-xl mb-3">
        <img
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          src={IMG_URL + cloudinaryImageId}
          alt={name}
        />
        {/* Optional Overlay for Rating */}
        <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-0.5 rounded-md text-xs font-bold shadow-sm">
          {sla?.slaString}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-1">
        {/* Restaurant Name */}
        <h3 className="text-lg font-bold text-gray-800 truncate leading-tight">
          {name}
        </h3>

        {/* Rating and Info Row */}
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
          <div className="flex items-center gap-1 bg-green-600 text-white px-1.5 py-0.5 rounded text-[10px]">
            <span>★</span>
            <span>{avgRating}</span>
          </div>
          <span className="text-gray-400">•</span>
          <span className="text-gray-600">{costForTwo}</span>
        </div>

        {/* Cuisines */}
        <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
          {cuisines?.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCards;