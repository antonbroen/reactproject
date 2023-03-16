import React from "react";

import { NavLink, Link } from "react-router-dom";


class Header extends React.Component {
    render() {
        return (
            <header>
                <nav className="navbar">
        <div className="navbar__container">
            <NavLink to="/" id="navbar__logo"> Thai Thai</NavLink>
            <div className="navbar__toggle" id="mobile-menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                
            </div>
            <ul className="navbar__menu">
                <li className="navbar__item">
                    <NavLink to="/" className="navbar__links">Hem</NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink to="/meny" className="navbar__links">Meny</NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink to="/information" className="navbar__links">Information</NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink to="/kontakt" className="navbar__links">Kontakt</NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink to="/special" className="navbar__links">Specialerbjudande</NavLink>
                </li>
            </ul>
        </div>
    </nav>
            </header>
        )
    }
}

export default Header; 