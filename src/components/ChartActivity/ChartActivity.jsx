import React from "react"
import "./ChartActivity.scss"
import {
  XAxis,
  Tooltip,
  BarChart,
  CartesianGrid,
  YAxis,
  Bar,
  Legend,
  ResponsiveContainer,
} from "recharts"
import ActivityToolTip from "../ActivityToolTip/ActivityToolTip"
import ActivityLegend from "../ActivityLegend/ActivityLegend"
import PropTypes from "prop-types"

const ChartActivity = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>Aucune donnée disponible.</p>
  }

  return (
    <>
      {/* <h3>Activité quotidienne</h3> */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barSize={7} barGap={8}>
          <text
            x="30"
            y="15"
            textAnchor="start"
            dominantBaseline="middle"
            style={{ fontSize: "16px", fontWeight: "bold", fill: "#20253A" }}
          >
            Activité quotidienne
          </text>
          <CartesianGrid strokeDasharray="3" vertical={false} />
          <XAxis
            dataKey="day"
            tick={{ fill: "#9B9EAC" }}
            tickLine={false}
            stroke="#DEDEDE"
            strokeWidth={2}
            tickMargin={16}
            tickFormatter={(day) => {
              const date = new Date(day)
              return isNaN(date) ? day : date.getDate()
            }}
          />
          <YAxis
            yAxisId="kilogram"
            orientation="right"
            tickMargin={30}
            tick={{ fill: "#9B9EAC" }}
            tickLine={false}
            axisLine={false}
            domain={["auto", "dataMax + 2"]}
            tickCount={3}
          />
          <YAxis yAxisId="calories" hide />
          <Tooltip
            content={<ActivityToolTip />}
            cursor={{ fill: "rgba(196, 196, 196, 0.5)" }}
          />
          <Bar
            name="Poids (kg)"
            dataKey="kilogram"
            yAxisId="kilogram"
            fill="#282D30"
            radius={[3, 3, 0, 0]}
          />
          <Bar
            name="Calories brûlées (kCal)"
            dataKey="calories"
            yAxisId="calories"
            fill="#E60000"
            radius={[3, 3, 0, 0]}
          />
<Legend
  content={<ActivityLegend />}
  verticalAlign="top"
  align="right"
/>
          ;
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

ChartActivity.propTypes = {
  /**
   * Data to be displayed in the chart
   */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default ChartActivity
