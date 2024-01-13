import React from 'react';
import CircleButton from '../CircleButton/CircleButton';
import "./MainMenu.scss"

function MainMenu() {
  const buttons = [
    { icon: 'icon-path-1', action: () => console.log('Action 1') },
    { icon: 'icon-path-2', action: () => console.log('Action 2') },
    { icon: 'icon-path-3', action: () => console.log('Action 3') },
    { icon: 'icon-path-4', action: () => console.log('Action 4') },
    { icon: 'icon-path-5', action: () => console.log('Action 5') },
    { icon: 'icon-path-6', action: () => console.log('Action 6') },
    // ... otros botones
  ];

  return (
    <div className="main-menu">
      <div className="central-button"> {/* Botón central aquí */} </div>
      <div className="circle-buttons">
        {buttons.map((button, index) => (
          <CircleButton key={index} icon={button.icon} onClick={button.action} />
        ))}
      </div>
    </div>
  );
}

export default MainMenu;