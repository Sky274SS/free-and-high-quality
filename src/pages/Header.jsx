import React from "react";
import "./header.css";
import {NavLink} from "react-router-dom";

const Header = () => {


    return (
        <div className="header">
            <nav className="menu">
                <div className="logo"/>
                <ol className="ol">
                    <li className="menu-item">
                        <NavLink to="/Home"/>
                    </li>
                    <li className="menu-item">
                        <NavLink to="services">Услуги</NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="Portfolio">Портфолио</NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="About us">О нас</NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="Stocks">Акции</NavLink>
                    </li>
                </ol>
                <div className="link">
                    <a href="https://www.instagram.com/skymirs/" target="_blank" rel="noreferrer">
                        <img src={'/images/inst.png'} alt={"instagram_logo"}/>
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Header;
