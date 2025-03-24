const ActivityLegend = (props) => {
  const { payload } = props
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "40px",
        justifyContent: "flex-end",
        paddingBottom: "30px",
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

export default ActivityLegend