import React, { useContext } from "react";
import { TabsToggleFlagContext } from "../../context";
import { getStyleClass } from "../../helpers.js";

const indexForBtns = ["now", "details", "forecast"];
const [first, second, third] = indexForBtns;

function WeatherTabsBtns({ toggleTab }) {
  const tabsToggleFlag = useContext(TabsToggleFlagContext);

  return (
    <div className="weather__tabs-btns">
      <button
        className={getStyleClass(first, tabsToggleFlag)}
        onClick={() => toggleTab(first)}
      >
        now
      </button>
      <button
        className={getStyleClass(second, tabsToggleFlag)}
        onClick={() => toggleTab(second)}
      >
        details
      </button>
      <button
        className={getStyleClass(third, tabsToggleFlag)}
        onClick={() => {
          toggleTab(third);
        }}
      >
        forecast
      </button>
    </div>
  );
}

export default WeatherTabsBtns;
