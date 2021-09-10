import React, {useState} from "react";
import "./header.css";
import {NavLink} from "react-router-dom";

const Header = () => {
    const [call, setCall] = useState("ПОЗВОНИТЬ")

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
                    {/*<li className="menu-item">*/}
                    {/*    <NavLink to="Portfolio">Портфолио</NavLink>*/}
                    {/*</li>*/}
                    <li className="menu-item">
                        <NavLink to="About us">О нас</NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="Stocks">Акции</NavLink>
                    </li>
                </ol>
                <div className="link">
                    <a href="https://www.instagram.com/remont_vsem_krasnodar/" target="_blank" rel="noreferrer">
                        <img src={'/images/inst.png'} alt={"instagram_logo"}/>
                    </a>
                </div>
            </nav>
            <div className='call_header' onClick={() => {
                if (call === "ПОЗВОНИТЬ") {
                    setCall("8-953-107-77-07")
                } else {
                    setCall('ПОЗВОНИТЬ')
                }
            }
            }>{call}</div>
        </div>
    );
};

export default Header;
