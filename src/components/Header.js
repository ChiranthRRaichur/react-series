import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [signInState, setsignInState] = useState("Sign In");
    return(
        <div className="headContainer">
            <div>
                <img className="logo"  alt="🍌"></img>
            </div>
            <div className="navLinks">
                <ul>
                    <li className="Header">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="Header">
                        <Link to="/about">About</Link>
                    </li>
                    <li className = "Header"> 
                        <Link to="/contact">Contact </Link>
                    </li>
                    <li className="Header">
                        <Link to="/cart">Cart</Link>
                    </li>
                    <button className="sign-in" onClick={()=>{

                        signInState === "Sign In" ? setsignInState("Sign Out") : setsignInState("Sign In");

                    }}> {signInState}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;