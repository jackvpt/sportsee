import "./AverageDurationToolTip.scss"
import PropTypes from "prop-types"

/**
 * AverageDurationToolTip component - Custom tooltip for displaying average session duration.
 *
 * @component
 * @param {Object} props - Component props
 * @param {boolean} props.active - Whether or not the tooltip is active
 * @param {Array} props.payload - The payload containing tooltip data
 * @returns {JSX.Element|null} A tooltip displaying session duration or null if inactive
 */
const AverageDurationToolTip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="averageDuration__tooltip">
        <p>{payload[0].value + " min"}</p>
      </div>
    )
  }
  return null
}

AverageDurationToolTip.propTypes = {
  // Whether or not the tooltip is active
  active: PropTypes.bool,
  // The payload of the tooltip
  payload: PropTypes.arrayOf(PropTypes.object),
}

export default AverageDurationToolTip
