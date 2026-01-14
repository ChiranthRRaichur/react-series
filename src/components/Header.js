import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const [signInState, setSignInState] = useState("Sign In");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      setSignInState("Sign Out");
    }
  }, [signInState]);

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    setSignInState("Sign In");
    navigate("/");
  };

  const handleAuthClick = () => {
    if (signInState === "Sign In") {
      navigate("/");
    } else {
      logout();
    }
  };

  return (
    <div className="headContainer">
      <div>
        <img className="logo" alt="🍌" />
      </div>

      <div className="navLinks">
        <ul>
          <li className="Header">
            <Link to="/home">Home</Link>
          </li>

          <li className="Header">
            <Link to="/about">About</Link>
          </li>

          <li className="Header">
            <Link to="/contact">Contact</Link>
          </li>

          <li className="Header">
            <Link to="/cart">Cart</Link>
          </li>

          <button className="sign-in" onClick={handleAuthClick}>
            {signInState}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
