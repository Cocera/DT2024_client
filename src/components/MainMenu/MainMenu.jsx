import React from "react";
import "./MainMenu.scss";

function MainMenu() {
  const buttons = [
    { icon: "icon-path-1", action: () => console.log("Action 2") },
    { icon: "icon-path-2", action: () => console.log("Action 2") },
    { icon: "icon-path-3", action: () => console.log("Action 2") },
    { icon: "icon-path-4", action: () => console.log("Action 2") },
    { icon: "icon-path-5", action: () => console.log("Action 2") },
    { icon: "icon-path-6", action: () => console.log("Action 2") },
  ];

  return (
    <div className="container-main-menu">
      <div className="main-menu">
        <div className="container-turn">
          <button className="circle-button button-one">Boton 1</button>
          <button className="circle-button button-two">Boton 2</button>
          <button className="circle-button button-three">Boton 3</button>
          <button className="circle-button button-four">Boton 4</button>
          <button className="circle-button button-five">Boton 5</button>
          <button className="circle-button button-six">Boton 6</button>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
