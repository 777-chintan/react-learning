import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import UserContext from "../utils/context/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onlineStatus = useOnlineStatus();
  const { userInfo } = useContext(UserContext);
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div className="header">
      <div className="logo">
        <img alt="LOGO" src={LOGO_URL} />
      </div>
      <div className="navbar-container">
        <ul className="nav-items">
          <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart({cartItems.length})</Link>
          </li>
          <button
            onClick={() => {
              setIsLoggedIn((prev) => !prev);
            }}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
          <li>{userInfo.name}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
