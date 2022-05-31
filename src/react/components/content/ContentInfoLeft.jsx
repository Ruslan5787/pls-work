import React, { useState } from "react";
import { TabsToggleFlagContext } from "../../context";
import WeatherTabs from "../weather/WeatherTabs";
import WeatherTabsBtns from "../weather/WeatherTabsBtns";

function ContentInfoLeft() {
  const [tabsToggleFlag, setTabsToggleFlag] = useState('now')

  function toggleTab(id) {
    setTabsToggleFlag(id);
  }

  return (
    <div className="weather__left">
      <TabsToggleFlagContext.Provider value={tabsToggleFlag}>
        <WeatherTabs />
        <WeatherTabsBtns toggleTab={toggleTab} />
      </TabsToggleFlagContext.Provider>
    </div>
  )
}

export default ContentInfoLeft
