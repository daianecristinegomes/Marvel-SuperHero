import React from "react";
import LogoMarvel from "../../assets/logo-marvel.jpg"
import "./header.css"

const Header = () => {
    return (
        <a href="/">
        <img className="logo-marvel" src={LogoMarvel} alt="Logo Marvel"/>
        </a>
    );
}

export default Header;