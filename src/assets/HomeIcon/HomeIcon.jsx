import React from 'react'
import "./HomeIcon.scss"
const HomeIcon = (isActive) => {
  return (
    <span className={`material-icons ${isActive ? 'active' : ''}`}>
      home
    </span>

  )
}

export default HomeIcon