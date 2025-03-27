import React from "react"
import { Link } from "react-router-dom"
import "./Error.scss"

/**
 * Error page component displayed for non-existing routes (404 error).
 *
 * @category Components
 * @component
 * @returns {JSX.Element} The Error page component with a 404 message and a link to the home page.
 */
const Error = () => {
  return (
    <section className="error">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link className="error__link" to="/" aria-label="Retour à l'accueil">
        Retourner sur la page d'accueil
      </Link>
    </section>
  )
}

export default Error
