import React from "react"
import "./Header.scss"
import { Link, NavLink } from "react-router-dom"
import logo from "../../assets/images/logo_sportsee.png"

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo sportsee"></img>

      <nav className="navbar">
        <NavLink
          className={({ isActive }) =>
            isActive ? "navbar__link--active" : "navbar__link"
          }
          to="/" // Links to Home page
        >
          Accueil
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navbar__link--active" : "navbar__link"
          }
          to="/profile" // Links to About page
        >
          Profil
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navbar__link--active" : "navbar__link"
          }
          to="/settings" // Links to About page
        >
          Réglage
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navbar__link--active" : "navbar__link"
          }
          to="/community" // Links to About page
        >
          Communauté
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
