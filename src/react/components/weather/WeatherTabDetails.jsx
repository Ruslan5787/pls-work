import React, { useContext } from "react";
import { useSelector } from "react-redux"
import { TabsToggleFlagContext } from "../../context";
import { format } from 'date-fns'
import { getStyleClass, getContent } from "../../helpers.js";

function WeatherTabDetails() {
  const tabsToggleFlag = useContext(TabsToggleFlagContext)
  const cityInfo = useSelector(state => state.getCityInfo.cityInfo)

  const active = cityInfo?.cod === 200
  const cityName = cityInfo?.name
  const temp = cityInfo?.main?.temp
  const feelsLike = cityInfo?.main?.feels_like
  const weather = cityInfo?.weather?.[0]?.description
  const sunrise = cityInfo?.sys?.sunrise
  const sunset = cityInfo?.sys?.sunset

  console.log();
  return (
    <div className={getStyleClass('details', tabsToggleFlag, true)}>
      <div className={active ? "weather__tab-wrapper active" : "weather__tab-wrapper"}>
        <div className="tab__name tab__name--twice">{getContent(cityName)}</div>
        <ul className="weather__tab-list">
          <li className="weather__tab-item">Temperature: <span id="temperature">{getContent(temp, Math.round)}°</span></li>
          <li className="weather__tab-item">Feels like: <span id="feels like">{getContent(feelsLike, Math.round)}°</span></li>
          <li className="weather__tab-item">Weather: <span id="weather">{getContent(weather)}</span></li>
          <li className="weather__tab-item">Sunrise: <span id="sunrise">{format(new Date(+getContent(sunrise)), 'HH:mm')}</span></li>
          <li className="weather__tab-item">Sunset: <span id="sunset">{format(new Date(+getContent(sunset)), 'HH:mm')}</span></li>
        </ul>
      </div>
    </div>
  )
}

export default WeatherTabDetails

console.log();
