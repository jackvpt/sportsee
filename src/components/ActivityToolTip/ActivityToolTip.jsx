import PropTypes from "prop-types"
import "./ActivityToolTip.scss"

/**
 * ActivityToolTip component - Custom tooltip for activity charts.
 *
 * @component
 * @param {Object} props - Component props
 * @param {boolean} props.active - Whether or not the tooltip is active
 * @param {Array} props.payload - The values displayed in the tooltip
 * @returns {JSX.Element|null} A tooltip displaying activity data or null if inactive
 */
function ActivityToolTip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="activity__tooltip">
        <p>{payload[0].value + "kg"}</p>
        <p>{payload[1].value + "Kcal"}</p>
      </div>
    )
  }
  return null
}

ActivityToolTip.propTypes = {
  // Whether or not the tooltip is active
  active: PropTypes.bool,
  // The values of the tooltip
  payload: PropTypes.arrayOf(PropTypes.object),
}

export default ActivityToolTip
