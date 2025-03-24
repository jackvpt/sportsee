import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  YAxis,
  ResponsiveContainer,
  Rectangle
} from "recharts"
import PropTypes from "prop-types"

import "./ChartAverageDuration.scss"
import AverageDurationToolTip from "../AverageDurationToolTip/AverageDurationToolTip"

/**
 * Render a LineChart using Recharts
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */
const ChartAverageDuration = ({ data }) => {
  const formatLabel = (value) => {
    if (value === 1) return "L"
    if (value === 2) return "M"
    if (value === 3) return "M"
    if (value === 4) return "J"
    if (value === 5) return "V"
    if (value === 6) return "S"
    if (value === 7) return "D"
    return value
  }

  const CustomCursor = (props) => {
    const { points, width, height, stroke } = props
    const { x, y } = points[0]
    const { x1, y1 } = points[1]
    console.log(props)
    return (
      <Rectangle
        fill="rgba(0,0,0,0.1)"
        stroke="red"
        x={x}
        y={y}
        width={width}
        height={1000}
      />
    )
  }

  const title = "Durée moyenne des\nsessions"
  const lines = title.split("\n")
  return (
    <>
      <ResponsiveContainer width="100%" height="100%" className={"center"}>
        <LineChart data={data} margin={{top:0,right:5, bottom: 20,left:5 }}>
          <text
            textAnchor="start"
            dominantBaseline="middle"
            style={{ fontSize: "15px", fill: "rgba(255,255,255,0.5)" }}
          >
            {lines.map((line, index) => (
              <tspan key={index} x="20" y="20" dy={index === 0 ? 0 : 20}>
                {line}
              </tspan>
            ))}
          </text>
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="url(#colorUv)"
            strokeWidth={2}
            activeDot={{
              stroke: "#FFF",
              strokeWidth: 4,
              r: 2,
            }}
            dot={false}
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "rgba(255,255,255,0.5)",
              fontSize: "12px",
            }}
            tickFormatter={formatLabel}
            tickMargin={0}
            // scale="point"
            // interval="preserveStartEnd"
          />
          <Tooltip
            content={<AverageDurationToolTip />}
            cursor={<CustomCursor />}
          />
          <YAxis hide domain={["dataMin-10", "dataMax+10"]} />
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
  /**
   * Data to be displayed in the chart
   */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ChartAverageDuration
