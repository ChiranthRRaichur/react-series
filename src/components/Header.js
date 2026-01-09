import { useState } from "react";

const Header = () => {
    const [signInState, setsignInState] = useState("Sign In");
    return(
        <div className="headContainer">
            <div>
                <img className="logo"  alt="🍌"></img>
            </div>
            <div className="navLinks">
                <ul>
                    <li className="Header">Home</li>
                    <li className="Header">About</li>
                    <li className="Header">Cart</li>
                    <button className="sign-in" onClick={()=>{

                        signInState === "Sign In" ? setsignInState("Sign Out") : setsignInState("Sign In");

                    }}> {signInState}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;