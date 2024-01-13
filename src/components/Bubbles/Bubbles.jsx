import React from "react";
import { Button, Space } from 'antd';

const Bubbles = () => {
  const buttonStyle = {
    width: '150px', // Adjust the width as needed
    height: '150px', // Adjust the height as needed
    borderRadius: '50%', 
    fontSize: '18px', // Adjust the font size as needed
  };

  return (
    <Space size="large" style={{ justifyContent: 'center' }}>
      <Button style={buttonStyle}>Button 1</Button>
      <Button style={buttonStyle}>Button 2</Button>
      <Button style={buttonStyle}>Button 3</Button>
      <Button style={buttonStyle}>Button 4</Button>
      <Button style={buttonStyle}>Button 5</Button>
    </Space>
  );
};

export default Bubbles;
