import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = ()=>{
    const [btnName,setbtnName] = useState("Login");
    //  use state is powerful local variable in which we can change the value of variable and it render whole header again after updating the value
    // thats why we use useState variable instead of normal javascript variable
    return(
        <div className="header">
            <div>
                <img className="Logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>cart</li>
                    <button className="btn"
                    onClick={()=>{
                        btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
}
export default Header;