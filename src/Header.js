import React from "react";
import { Link } from "react-router-dom";
import Luimars from "./assets/Luimars-logo.png";
import SearchIcon from "@material-ui/icons/Search";
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
        <Link></Link>
        <Link></Link>
        <Link></Link>
        <Link></Link>
      </div>
    </nav>
  );
}

export default Header;
