import React from "react";
import { Button, Space } from 'antd';
import "./Bubbles.scss";

const Bubbles = () => {
  const buttonStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    fontSize: '18px',
    position: 'absolute', // Set the position to absolute
    transform: 'translate(-50%, -50%)', // Center the button on its position
  };

  return (
    <div className="bubbles-container">
      <div className="midbb">
        <Button style={{ ...buttonStyle, top: '50%', left: '50%' }}>mid</Button>
      </div>
      <Button className="toplbb" style={{ ...buttonStyle, top: '10%', left: '10%' }}>top left</Button>
      <Button className="toprbb" style={{ ...buttonStyle, top: '10%', left: '90%' }}>top right</Button>
      <Button className="midlbb" style={{ ...buttonStyle, top: '50%', left: '10%' }}>btm left</Button>
      <Button className="midrbb" style={{ ...buttonStyle, top: '50%', left: '90%' }}>btm right</Button>
      <Button className="btmbb" style={{ ...buttonStyle, top: '90%', left: '50%' }}>btm</Button>
    </div>
  );
};

export default Bubbles;
