import "./ChartScore.scss"
import PropTypes from "prop-types"
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts"

/**
 * Render a Radial Bar Chart using Recharts
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */
const ChartScore = ({ data }) => {
  const score = data
  return (
    <>
      <ResponsiveContainer width="100%" height="100%" className={"center"}>
        <RadialBarChart
          innerRadius="0%"
          outerRadius="0%"
          startAngle={90}
          endAngle={-270}
          data={[{ value: 1 }]}
        >
          <text
            x="30"
            y="30"
            textAnchor="start"
            dominantBaseline="middle"
            style={{ fontSize: "15px", fill: "#20253A" }}
          >
            Score
          </text>          <RadialBar
            data={[{ value: 1 }]}
            dataKey="value"
            barSize={170}
            fill="#fff"
            isAnimationActive={false}
          />

          {/* Arc rouge dynamique */}
          <RadialBar
            data={[{ value: score }]}
            dataKey="value"
            barSize={10}
            cornerRadius={50}
            fill="#FF0000"
          />
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
            <tspan
              x="50%"
              dy="-10"
              style={{ fontSize: "26px", fontWeight: "700", fill: "#282D30" }}
            >
              {score * 100}%
            </tspan>
            <tspan
              x="50%"
              dy="30"
              style={{ fontSize: "16px", fill: "#74798C" }}
            >
              de votre
            </tspan>
            <tspan
              x="50%"
              dy="30"
              style={{ fontSize: "16px", fill: "#74798C" }}
            >
              objectif
            </tspan>
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </>
  )
}

ChartScore.propTypes = {
  /**
   * Data to be displayed in the chart
   */
  data: PropTypes.object.isRequired,
}

export default ChartScore
