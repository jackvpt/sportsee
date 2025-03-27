import PropTypes from "prop-types"
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts"

/**
 * Renders a Radial Bar Chart to visualize the user's score.
 *
 * @category Components
 * @component
 * @param {Object} props - The component props.
 * @param {number} props.data - The user's score as a decimal (e.g., 0.75 for 75%).
 * @returns {React.Component} A React component displaying the score.
 */
const ChartScore = ({ data }) => {
  const score = data

  return (
    <ResponsiveContainer width="100%" height="100%" className={"center"}>
      <RadialBarChart
        innerRadius="0%"
        outerRadius="0%"
        startAngle={90}
        endAngle={-270}
        data={[{ value: 1 }]}
      >
        {/* Chart title */}
        <text
          x="30"
          y="30"
          textAnchor="start"
          dominantBaseline="middle"
          style={{ fontSize: "15px", fill: "#20253A" }}
        >
          Score
        </text>

        {/* Background arc */}
        <RadialBar
          data={[{ value: 1 }]}
          dataKey="value"
          barSize={170}
          fill="#fff"
          isAnimationActive={false}
        />

        {/* Dynamic red arc representing the user's score */}
        <RadialBar
          data={[{ value: score }]}
          dataKey="value"
          barSize={10}
          cornerRadius={50}
          fill="#FF0000"
        />

        {/* Score text */}
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
          <tspan
            x="50%"
            dy="-10"
            style={{ fontSize: "26px", fontWeight: "700", fill: "#282D30" }}
          >
            {score * 100}%
          </tspan>
          <tspan x="50%" dy="30" style={{ fontSize: "16px", fill: "#74798C" }}>
            de votre
          </tspan>
          <tspan x="50%" dy="30" style={{ fontSize: "16px", fill: "#74798C" }}>
            objectif
          </tspan>
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  )
}

ChartScore.propTypes = {
  // User's score as a decimal number (e.g., 0.75 for 75%).
  data: PropTypes.number.isRequired,
}

export default ChartScore
