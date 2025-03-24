import React from "react";
import { Themes } from "../constants/themes";
import { ISetTheme } from "../types/component.types";

const SetTheme = ({ theme, setTheme }: ISetTheme) => {
  const handleTheme = (e: React.MouseEvent<HTMLDivElement>, color: Themes) => {
    switch (e.type) {
      case "mouseover":
        if (!window?.__MAIN_THEME__) {
          window.__MAIN_THEME__ = theme;
        }
        setTheme(color);
        break;
      case "mouseleave":
        if (window?.__MAIN_THEME__) {
          setTheme(window.__MAIN_THEME__);
        }
        break;
      case "click":
        if (window?.__MAIN_THEME__) {
          window.__MAIN_THEME__ = undefined;
        }
        setTheme(color);
        break;
    }
  };
  
  return (
    <>
      <p className="cam-text">Choose a Theme</p>
      <div className="set-theme flex-center-center">
        {(Object.keys(Themes) as Array<keyof typeof Themes>)?.map((t) => (
          <div
            className={`theme theme-${Themes[t]}`}
            onMouseOver={(e) => handleTheme(e, Themes[t])}
            onMouseLeave={(e) => handleTheme(e, Themes[t])}
            onClick={(e) => handleTheme(e, Themes[t])}
            style={{ backgroundColor: Themes[t] }}
            key={String(Themes[t]) + String(Math.random())}
          ></div>
        ))}
      </div>
    </>
  );
};

export default SetTheme;
