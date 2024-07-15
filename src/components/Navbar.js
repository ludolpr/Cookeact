import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <h1 className="Logo">CuisineRecettes</h1>
      <ul className="NavLinks">
        <li>
          <NavLink className="NavItem" to="/">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink className="NavItem" to="/login">
            Se connecter
          </NavLink>
        </li>
        <li>
          <NavLink className="NavItem" to="/register">
            S'enregistrer
          </NavLink>
        </li>
        <li>
          <NavLink className="NavItem" to="/logout">
            Se deconnecter
          </NavLink>
        </li>
        <li>
          <NavLink className="NavItem" to="/recipes">
            Recettes
          </NavLink>
        </li>
        <li>
          <NavLink className="NavItem" to="/profil">
            Profil
          </NavLink>
        </li>
        <li>
          <NavLink className="NavItem" to="/about">
            À propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
