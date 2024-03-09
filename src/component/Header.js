import { LOGO_URL } from "../utils/constant";

const Header = ()=>{
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
                </ul>
            </div>
        </div>
    );
}
export default Header;