import React, { useState } from "react";
import "./Switch.css"; // Import the CSS file for styling

const Switch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleSwitchChange = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      className={`switch-container ${isOn ? "on" : "off"}`}
      onClick={handleSwitchChange}
    >
      <div className="switch-slider"></div>
    </div>
  );
};

export default Switch;
