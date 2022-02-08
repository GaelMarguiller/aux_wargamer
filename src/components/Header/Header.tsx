import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <nav>
                <ul>
                    <NavLink
                        to="/"
                        className={(nav) => (nav.isActive ? "nav-active" : "")}
                    >
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink
                        to="/Games Workshop"
                        className={(nav) => (nav.isActive ? "nav-active" : "")}
                    >
                        <li>Games Workshop</li>
                    </NavLink>
                    <NavLink
                        to="/Autre Jeux"
                        className={(nav) => (nav.isActive ? "nav-active" : "")}
                    >
                        <li>Autre Jeux</li>
                    </NavLink>
                    <NavLink
                        to="/Modélisme et Peinture"
                        className={(nav) => (nav.isActive ? "nav-active" : "")}
                    >
                        <li>Modélisme et Peinture</li>
                    </NavLink>
                </ul>
            </nav>
            <h1>Aux Wargamers</h1>
        </div>
    );
};

export default Header;
