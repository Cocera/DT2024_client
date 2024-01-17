import React from 'react'
import "./NavBarIcons.scss"
const HomeIcon = ({ isActive, icon }) => {
  return (
    <span className={`material-icons ${isActive ? 'active' : ''}`}>
      {icon}
    </span>

  )
}

export default HomeIcon