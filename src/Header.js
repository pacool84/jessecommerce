import React from "react";
import { Link } from "react-router-dom";
import Luimars from "./assets/Luimars-logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import "./styles/header.css";

function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img className="header__logo" src={Luimars} alt="logo page"></img>
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchbar"></input>
        <SearchIcon className="header__searchicon"></SearchIcon>
      </div>
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasket />
            <span>0</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
