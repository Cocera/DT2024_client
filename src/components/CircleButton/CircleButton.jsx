import React from 'react';
import "../MainMenu/MainMenu.scss"
function CircleButton({ icon, onClick }) {
  return (
    <button className="circle-button" onClick={onClick}>
      <img src={icon} alt="button-icon" />
    </button>
  );
}

export default CircleButton;