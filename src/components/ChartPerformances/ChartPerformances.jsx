import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  PolarRadiusAxis,
  Text,
} from "recharts"
import PropTypes from "prop-types"

/**
 * Renders a RadarChart displaying user performance metrics.
 *
 * @category Components
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.data - The dataset to be visualized, containing performance data.
 * @returns {React.Component} A React component rendering the chart.
 */
const ChartPerformances = ({ data }) => {
  /**
   * Translates performance metric labels to French.
   *
   * @param {string} value - The English label of the metric.
   * @returns {string} The translated label.
   */
  const formatLabel = (value) => {
    const labels = {
      Energy: "Energie",
      Strength: "Force",
      Speed: "Vitesse",
      Intensity: "Intensité",
    }
    return labels[value] || value
  }

  /**
   * Custom label rendering for the RadarChart.
   *
   * @param {Object} props - Label properties.
   * @param {Object} props.payload - The label payload.
   * @param {number} props.x - The X-coordinate of the label.
   * @param {number} props.y - The Y-coordinate of the label.
   * @param {number} props.cx - The X-coordinate of the chart center.
   * @param {number} props.cy - The Y-coordinate of the chart center.
   * @returns {React.Component} A formatted label component.
   */
  const renderPolarAngleAxis = ({ payload, x, y, cx, cy, ...rest }) => {
    return (
      <Text
        {...rest}
        verticalAnchor="middle"
        y={y + (y - cy) / 10}
        x={x + (x - cx) / 100}
        fill="#FFFFFF"
        fontSize="12px"
      >
        {formatLabel(
          data.kind[payload.value].charAt(0).toUpperCase() +
            data.kind[payload.value].slice(1)
        )}
      </Text>
    )
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart outerRadius={90} data={[...data.data].reverse()}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          tick={(props) => renderPolarAngleAxis(props)}
        />
        <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
        <Radar
          dataKey="value"
          stroke="#FF0101"
          fill="#FF0101"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}

ChartPerformances.propTypes = {
  /**
   * Object containing the performance data.
   * - `kind`: An object mapping numeric keys to performance metric names.
   * - `data`: An array of objects with `kind` (number) and `value` (number).
   */
  data: PropTypes.shape({
    kind: PropTypes.object.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        kind: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
}

export default ChartPerformances
