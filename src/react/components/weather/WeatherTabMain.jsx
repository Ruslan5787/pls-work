import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTIONS_TYPES } from "../../actionsType";
import { TabsToggleFlagContext } from "../../context";
import { getStyleClass, getContent, getUrlPictureWeather } from "../../helpers.js"

function WeatherTabMain() {
  const dispatch = useDispatch()
  const tabsToggleFlag = useContext(TabsToggleFlagContext)
  const cityInfo = useSelector(state => state.getCityInfo.cityInfo)
  const active = cityInfo?.cod === 200
  const temp = cityInfo?.main?.temp
  const icon = cityInfo?.weather?.[0]?.icon
  const cityName = cityInfo?.name


  function updateFavoriteCity(cityName) {
    dispatch({ type: ACTIONS_TYPES.FAVORITE_CITIES, favoriteCity: cityName })
  }

  return (
    <div className={getStyleClass('now', tabsToggleFlag, true)} >
      <div className={active ? "weather__tab-wrapper active" : "weather__tab-wrapper"} >
        <div className="weather__tab--first">
          <div className="weather__tab-degrees">{getContent(temp, Math.round)}°</div>
          <div className="weather__tab-img">
            <img src={getContent(icon, getUrlPictureWeather)} />
          </div>
          <div className="weather__tab-bottom tab-bottom">
            <div className="tab__name">{getContent(cityName)}</div>
            <button
              className="tab-bottom__btn tab-svg"
              onClick={() => updateFavoriteCity(cityName)}>
              <svg width="24" height="25" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.54" fillRule="evenodd" clipRule="evenodd"
                  d="M17.5 1C15.0556 1 12.8556 2.7875 12 5.125C11.1444 2.7875 8.94444 1 6.5 1C3.44444 1 1 3.6125 1 7.1875C1 12 5.27778 16.125 12 23C18.7222 16.125 23 12 23 7.1875C23 3.6125 20.5556 1 17.5 1Z"
                  strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherTabMain
