import PropTypes from "prop-types"

/**
 * ActivityLegend component - Custom legend for activity charts.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Array} props.payload - Legend items provided by Recharts
 * @returns {JSX.Element} Custom legend with colored dots and labels
 */
const ActivityLegend = (props) => {
  const { payload } = props
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "40px",
        justifyContent: "flex-end",
        marginBottom: "70px",
      }}
    >
      {payload.map((entry, index) => (
        <div
          key={`item-${index}`}
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <span
            style={{
              display: "inline-block",
              width: "10px",
              height: "10px",
              backgroundColor: entry.color,
              borderRadius: "50%",
            }}
          />
          <span style={{ color: "#74798C", fontSize: "14px" }}>
            {entry.value}
          </span>
        </div>
      ))}
    </div>
  )
}

ActivityLegend.propTypes = {
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default ActivityLegend
