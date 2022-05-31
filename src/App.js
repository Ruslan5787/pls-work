import React, { useState } from "react";
import ContentTop from "./react/components/content/ContentTop";
import ContentBottom from "./react/components/content/ContentBottom";

export function App() {
  const [getCityInfo, setGetCityInfo] = useState();

  function updateData(handleSubmit) {
    setGetCityInfo(() => handleSubmit)
  }

  return (
    <div className="weather">
      <div className="weather__content">
        <ContentTop
          updateData={updateData}
        />
        <ContentBottom
          getCityInfo={getCityInfo}
        />
      </div>
    </div>
  )
}