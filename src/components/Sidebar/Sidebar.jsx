import "./Sidebar.scss"
import React from "react"
import icon_bike from "../../assets/images/icon_bike.png"
import icon_dumbbells from "../../assets/images/icon_dumbbells.png"
import icon_swim from "../../assets/images/icon_swim.png"
import icon_yoga from "../../assets/images/icon_yoga.png"

const Sidebar = () => {
  return (
    <aside>
      <div className="container__icons">
        <img src={icon_yoga} width={64} alt="icon yoga"></img>
        <img src={icon_swim} width={64} alt="icon swim"></img>
        <img src={icon_bike} width={64} alt="icon bike"></img>
        <img src={icon_dumbbells} width={64} alt="icon dumbbells"></img>
      </div>
      <div className="copyright">Copyright, SportSee 2020</div>
    </aside>
  )
}

export default Sidebar
