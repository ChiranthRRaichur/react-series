import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import LoggedUserContext from "../utils/LoggedUserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const { username } = useContext(LoggedUserContext);

  const navigate = useNavigate();
  const [signInState, setSignInState] = useState("Sign In");
  const isOnline = useOnlineStatus();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      setSignInState("Sign Out");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    setSignInState("Sign In");
    navigate("/");
  };

  const handleAuthClick = () => {
    signInState === "Sign In" ? navigate("/") : logout();
  };

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log("Cart Items:", cartItems);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="shrink-0 flex items-center">
            <Link to="/home">
              <span className="text-3xl filter grayscale-0 hover:scale-110 transition-transform cursor-pointer">
                🍌
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li className="text-sm font-medium text-gray-600">
                {isOnline ? "Online ✅" : "Offline 🅾️"}
              </li>

              <li>
                <Link
                  to="/home"
                  className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/grocery"
                  className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
                >
                  Grocery
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
                >
                  Contact
                </Link>
              </li>

              <li className="relative">
                <Link
                  to="/cart"
                  className="text-gray-700 hover:text-orange-500 font-medium transition-colors flex items-center"
                >
                  Cart
                  <span className="ml-1 bg-orange-100 text-orange-600 text-xs font-bold px-2 py-0.5 rounded-full">
                    {cartItems.length}
                  </span>
                </Link>
              </li>

              <li>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 font-semibold text-sm rounded-full border border-gray-200 shadow-sm">
                  👤 {username}
                </span>
              </li>

              {/* Auth Button */}
              <button
                className={`ml-4 px-5 py-2 rounded-full font-semibold transition-all duration-200 shadow-sm
                  ${
                    signInState === "Sign In"
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "bg-gray-100 text-gray-800 hover:bg-red-100 hover:text-red-600"
                  }`}
                onClick={handleAuthClick}
              >
                {signInState}
              </button>
            </ul>
          </div>

          {/* Mobile Menu Placeholder (Hamburger icon would go here) */}
          <div className="md:hidden text-gray-500 italic text-sm">Menu</div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
