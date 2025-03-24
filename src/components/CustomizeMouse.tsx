import React from "react";
import { ICustomizeMouse } from "../types/component.types";

const CustomizeMouse = ({
  sensitivity,
  theme,
  clickToHit,
  setClickToHit,
  setSensitivity,
}: ICustomizeMouse) => {
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClickToHit(e.target.checked);
  };

  const handleSens = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSensitivity(parseFloat(e.target.value));
  };
  return (
    <div className="customize-mouse flex-center-center">
      <div className="flex-center-center">
        <p>Mouse click to hit targets?</p>
        <label className="switch" style={{ "--color-button": theme }}>
          <input
            type="checkbox"
            onChange={handleCheckbox}
            checked={clickToHit}
          />
          <span className="slider"></span>
        </label>
      </div>
      <div className="flex-center-center">
        <p>
          Sensitivity{" "}
          <input
            type="number"
            value={sensitivity}
            onChange={handleSens}
            max="10"
            min="0.1"
            step="0.1"
            style={{ backgroundColor: theme }}
          />
        </p>
        <input
          type="range"
          min="0.1"
          max="10"
          value={sensitivity}
          step="0.1"
          onChange={handleSens}
          style={{ color: theme }}
        />
      </div>
    </div>
  );
};

export default CustomizeMouse;
