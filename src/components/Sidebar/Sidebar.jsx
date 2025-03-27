import "./Sidebar.scss"
import React from "react"
import icon_bike from "../../assets/images/icon_bike.png"
import icon_dumbbells from "../../assets/images/icon_dumbbells.png"
import icon_swim from "../../assets/images/icon_swim.png"
import icon_yoga from "../../assets/images/icon_yoga.png"

/**
 * Sidebar component displaying sport activity icons and a copyright notice.
 *
 * @category Components
 * @component
 * @returns {JSX.Element} The Sidebar component for navigation and branding.
 */
const Sidebar = () => {
  const icons = [
    { src: icon_yoga, alt: "Yoga Icon" },
    { src: icon_swim, alt: "Swimming Icon" },
    { src: icon_bike, alt: "Cycling Icon" },
    { src: icon_dumbbells, alt: "Weightlifting Icon" },
  ]

  return (
    <aside className="sidebar">
      <div className="sidebar__icons">
        {icons.map((icon, index) => (
          <img key={index} src={icon.src} width={64} alt={icon.alt} />
        ))}
      </div>
      <div className="sidebar__copyright">Copyright, SportSee 2020</div>
    </aside>
  )
}

export default Sidebar
