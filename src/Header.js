import React from "react";
import { Link } from "react-router-dom";
import Luimars from "./assets/Luimars-logo.png";
import "./styles/header.css";

function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img className="header__logo" src={Luimars} alt="logo page"></img>
      </Link>
      <input type="text" className="header__searchbar"></input>
    </nav>
  );
}

export default Header;
