import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  YAxis,
  ResponsiveContainer,
  Rectangle,
} from "recharts"
import PropTypes from "prop-types"
import AverageDurationToolTip from "../AverageDurationToolTip/AverageDurationToolTip"

/**
 * ChartAverageDuration component - Displays a line chart showing the average session duration per day.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Array} props.data - Array of session duration data
 * @returns {JSX.Element} A line chart visualizing the average session duration
 */
const ChartAverageDuration = ({ data }) => {
  /**
   * Formats the X-axis labels based on the day number.
   *
   * @param {number} value - Day number (1-7)
   * @returns {string} Corresponding day abbreviation
   */
  const formatLabel = (value) => {
    const days = ["", "L", "M", "M", "J", "V", "S", "D"]
    return days[value] || value
  }

  /**
   * Custom cursor component for the chart.
   *
   * @param {Object} props - Cursor properties
   * @param {Array} props.points - Data points
   * @param {number} props.width - Cursor width
   * @returns {JSX.Element} A customized cursor rectangle
   */
  const CustomCursor = (props) => {
    const { points, width } = props
    const { x } = points[0]
    return (
      <Rectangle
        fill="rgba(0,0,0,0.1)"
        x={x}
        y={-20}
        width={width + 100}
        height={1000}
      />
    )
  }

  /**
   * Custom active dot component for the chart.
   *
   * @param {Object} props - Dot properties
   * @param {number} props.cx - X-coordinate
   * @param {number} props.cy - Y-coordinate
   * @returns {JSX.Element} A customized dot
   */
  const CustomActiveDot = (props) => {
    const { cx, cy } = props
    return (
      <g>
        <circle
          cx={cx}
          cy={cy}
          r={8}
          fill="rgb(255,255,255,0.2)"
          stroke="none"
        />
        <circle cx={cx} cy={cy} r={4} fill="white" stroke="none" />
      </g>
    )
  }

  const title = "Durée moyenne des\nsessions"
  const lines = title.split("\n")
  return (
    <>
      <ResponsiveContainer width="100%" height="100%" className={"center"}>
        <LineChart
          data={data}
          margin={{ top: 40, right: 15, bottom: 25, left: 15 }}
        >
          {/* Chart Title */}
          <text
            textAnchor="start"
            dominantBaseline="middle"
            style={{ fontSize: "15px", fill: "rgba(255,255,255,0.5)" }}
          >
            {lines.map((line, index) => (
              <tspan key={index} x="30" y="30" dy={index === 0 ? 0 : 20}>
                {line}
              </tspan>
            ))}
          </text>

          {/* Line Chart */}
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="url(#colorUv)"
            strokeWidth={2}
            activeDot={<CustomActiveDot />}
            dot={false}
          />

          {/* X Axis */}
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "rgba(255,255,255,0.5)",
              fontSize: "12px",
            }}
            tickFormatter={formatLabel}
            tickMargin={15}
          />

          {/* Tooltip */}
          <Tooltip
            content={<AverageDurationToolTip />}
            cursor={<CustomCursor />}
          />

          {/* Y Axis */}
          <YAxis hide domain={["dataMin-10", "dataMax+10"]} />

          {/* Gradient for Line */}
          <defs>
            <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
              <stop offset="20%" stopColor="rgba(255, 255, 255, 0.4)" />
              <stop offset="40%" stopColor="rgba(255, 255, 255, 0.5)" />
              <stop offset="60%" stopColor="rgba(255, 255, 255, 0.6)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
          </defs>
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}

ChartAverageDuration.propTypes = {
  // The dataset containing session duration data
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ChartAverageDuration
