import { useSelector, useDispatch } from "react-redux";
import {
  clearCart,
  removeItem,
  decreaseItem,
  addItem,
} from "../utils/cartSlice";

const Cart = () => {
  // subscribing to the specific slice (cart slice) of the store
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  };
  const handleDecrease = (itemId) => {
    dispatch(decreaseItem(itemId));
  };

  const handleIncrease = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="min-h-[80vh] bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-end border-b-2 border-gray-200 pb-6 mb-8">
          <div>
            <h1 className="text-4xl font-black text-gray-900 tracking-tight">
              Shopping <span className="text-orange-500">Cart</span>
            </h1>
            <p className="text-gray-500 mt-1 font-medium">
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in
              your bag
            </p>
          </div>

          {cartItems.length > 0 && (
            <button
              onClick={handleClearCart}
              className="text-sm font-bold text-red-500 hover:text-red-700 transition-colors uppercase tracking-wider"
            >
              Clear All
            </button>
          )}
        </div>

        {/* Cart Content */}
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100">
          {cartItems.length === 0 ? (
            <div className="py-20 text-center">
              <div className="text-6xl mb-4">🛒</div>
              <h2 className="text-2xl font-bold text-gray-800">
                Your cart is empty
              </h2>
              <p className="text-gray-500 mt-2">
                Looks like you haven't added anything yet.
              </p>
              <button className="mt-8 px-8 py-3 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-transform active:scale-95 shadow-lg shadow-orange-200">
                Go Shopping
              </button>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="p-6 flex items-center gap-6 hover:bg-gray-50 transition-colors"
                >
                  {/* Item Image Placeholder */}
                  <div className="w-24 h-24 bg-gray-100 rounded-2xl flex-shrink-0 overflow-hidden">
                    🍔
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200"></div>
                  </div>

                  {/* Item Info */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xl font-black text-gray-900">
                        ₹{item.price_inr}
                      </span>
                      {/* Quantity Controller */}
                      <div className="flex items-center gap-3">
                        <button
                          className="w-8 h-8 rounded-full bg-gray-200 text-gray-800 font-bold hover:bg-gray-300 active:scale-95"
                          onClick={() => handleDecrease(item.id)}
                        >
                          −
                        </button>

                        <span className="text-sm font-bold text-gray-700">
                          {item.quantity}
                        </span>

                        <button
                          className="w-8 h-8 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 active:scale-95"
                          onClick={() => handleIncrease(item)}
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        onClick={() => handleRemove(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Summary Section */}
              <div className="bg-gray-50 p-8">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-600 font-medium">
                    Total Amount
                  </span>
                  <span className="text-3xl font-black text-gray-900">
                    ₹
                    {cartItems.reduce(
                      (total, item) => total + item.price_inr * item.quantity,
                      0
                    )}
                  </span>
                </div>
                <button className="w-full py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-black transition-all shadow-lg active:scale-[0.98]">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
