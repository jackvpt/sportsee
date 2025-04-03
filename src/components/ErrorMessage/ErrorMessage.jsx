import "./ErrorMessage.scss"
import errorIcon from "../../assets/images/icon_error.png"
import { Link } from "react-router"

const ErrorMessage = ({ message }) => {
  return (
    <section className="container__error">
      <div className="container__error-message">
        <img
          src={errorIcon}
          alt="Error icon"
          className="error-icon"
          width={32}
        />
        <p>{message}</p>
      </div>
      <Link className="error__link" to="/" aria-label="Retour à l'accueil">
        Retourner sur la page d'accueil
      </Link>{" "}
    </section>
  )
}

export default ErrorMessage
