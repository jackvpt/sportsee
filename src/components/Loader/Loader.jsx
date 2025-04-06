import "./Loader.scss"

/**
 * Loader component displaying a loading animation.
 *
 * @component
 * @returns {JSX.Element} The Loader component.
 */
const Loader = () => {
  return (
    <div className="loader__modal">
      <div className="loader__container">
        <div className="spinner"></div>
        <div className="loader__text">
          <img src="/icon_sportsee.png" alt="diner" />
          Chargement...
        </div>
      </div>
    </div>
  )
}

export default Loader
