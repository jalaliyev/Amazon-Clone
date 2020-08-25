import React from "react";
import "../style/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import Basketİcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useStateValue } from "../StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"} className="header_link">
          <div onClick={login} className="header_option">
            <span className="header_optionLineOne">Hello {user?.email}</span>
            <span className="header_optionLineTwo">
              {user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>

        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="checkout" className="header_link">
          <div className="header_optionBasket">
            <Basketİcon />
            <span className="header_optionLineTwo header_BasketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
      {/* Basket icon with number */}
    </nav>
  );
}

export default Header;
