import React from "react"
import "./Header.scss"
import { NavLink } from "react-router-dom"
import logo from "../../assets/images/logo_sportsee.png"

/**
 * Renders the main navigation header of the application.
 *
 * @category Components
 * @component
 * @returns {React.Component} A React component displaying the header with navigation links.
 */
const Header = () => {
  return (
    <header>
      {/* Logo of the application */}
      <img src={logo} alt="Logo SportSee"></img>

      {/* Navigation menu */}
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
          to="/profile" // Links to Profile page
        >
          Profil
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navbar__link--active" : "navbar__link"
          }
          to="/settings" // Links to Settings page
        >
          Réglage
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navbar__link--active" : "navbar__link"
          }
          to="/community" // Links to Community page
        >
          Communauté
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
