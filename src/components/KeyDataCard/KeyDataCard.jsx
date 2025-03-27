import "./KeyDataCard.scss"
import PropTypes from "prop-types"
import icon_calories from "../../assets/images/icon_calories.png"
import icon_protein from "../../assets/images/icon_protein.png"
import icon_carbs from "../../assets/images/icon_carbs.png"
import icon_fat from "../../assets/images/icon_fat.png"

/**
 * Renders a key data card displaying a nutritional value (calories, proteins, etc.).
 *
 * @category Components
 * @component
 * @param {Object} props - Component props.
 * @param {string} props.title - The title of the key data (e.g., "Calories", "Protéines").
 * @param {number} props.value - The numerical value of the key data.
 * @param {string} props.unit - The unit of measurement (e.g., "kCal", "g").
 * @returns {JSX.Element} A React component displaying a key data card.
 */
const KeyDataCard = ({ title, value, unit }) => {
  // Format number with thousands separator
  const formatNumber = (num) => new Intl.NumberFormat("fr-FR").format(num)

  // Map icons to titles
  const icons = {
    calories: icon_calories,
    proteines: icon_protein,
    glucides: icon_carbs,
    lipides: icon_fat,
  }

  return (
    <div className="container__keyDataCard">
      <div className="container__keyDataCard__logo">
        <img src={icons[title.toLowerCase()]} alt={title} />
      </div>
      <div className="container__keyDataCard__data">
        <p>
          {formatNumber(value)}
          {unit}
        </p>
        <h4>{title}</h4>
      </div>
    </div>
  )
}

KeyDataCard.propTypes = {
  // The title of the key data (e.g., "Calories", "Protéines")
  title: PropTypes.string.isRequired,

  // The numerical value of the key data
  value: PropTypes.number.isRequired,

  // The unit of measurement (e.g., "kCal", "g")
  unit: PropTypes.string.isRequired,
}

export default KeyDataCard
