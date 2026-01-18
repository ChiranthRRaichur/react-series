import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { IMG_URL } from "../utils/constant";

const ItemList = ({ items, isCartPage }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action to add the item to the store
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between gap-4 last:border-b-0 pb-6"
        >
          {/* Left Side: Item Details */}
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold text-gray-700">
                {item.card.info.name}
              </span>
              <span className="block font-semibold text-gray-600">
                ₹{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
              {item.card.info.description}
            </p>
          </div>

          {/* Right Side: Image and Add Button */}
          <div className="w-3/12 relative flex flex-col items-center">
            <div className="w-full h-24 overflow-hidden rounded-lg shadow-inner bg-gray-50">
              {item.card.info.imageId && (
                <img
                  src={IMG_URL + item.card.info.imageId}
                  className="w-full h-full object-cover"
                  alt={item.card.info.name}
                />
              )}
            </div>

            {/* Show 'Add' button only if not on the Cart page */}
            {!isCartPage && (
              <button
                className="absolute -bottom-2 p-2 px-6 rounded-lg bg-white text-green-600 font-bold shadow-lg border border-gray-100 hover:bg-gray-50 transition-all active:scale-90 text-xs uppercase"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
