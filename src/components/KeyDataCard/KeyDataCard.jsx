import "./KeyDataCard.scss"
import PropTypes from "prop-types"
import icon_calories from "../../assets/images/icon_calories.png"
import icon_protein from "../../assets/images/icon_protein.png"
import icon_carbs from "../../assets/images/icon_carbs.png"
import icon_fat from "../../assets/images/icon_fat.png"

const KeyDataCard = ({ title, value, unit }) => {
  const formatNumber = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  const icon = (title) => {
    let icon
    switch (title.toLowerCase()) {
      case "calories":
        icon = icon_calories
        break
      case "proteines":
        icon = icon_protein
        break
      case "glucides":
        icon = icon_carbs
        break
      case "lipides":
        icon = icon_fat
        break
    }
    return icon
  }

  return (
    <div className="container__keyDataCard">
      <div className="container__keyDataCard__logo">
        <img src={icon(title)} alt={title} />
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
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
}
export default KeyDataCard
