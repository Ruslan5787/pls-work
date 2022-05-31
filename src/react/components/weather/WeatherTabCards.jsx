import React, { useContext } from "react";
import { useSelector } from "react-redux"
import { TabsToggleFlagContext } from "../../context";
import { getContent, getStyleClass } from "../../helpers.js";
import Card from "./WeatherCard";

function WeatherTabCards() {
  const tabsToggleFlag = useContext(TabsToggleFlagContext)
  const cityCards = useSelector(state => state.getCityInfo.cityCards)
  const active = parseFloat(cityCards?.cod) === 200
  const cityName = cityCards?.city?.name
  const cards = []

  if (cityCards) {
    const cardsList = cityCards?.list.slice(0, 7)
    cardsList.forEach(card => {
      cards.push(
        <Card data={card} key={card.dt} />
      )
    });
  }

  return (
    <div className={getStyleClass('forecast', tabsToggleFlag, true)}>
      <div className={active ? "weather__tab-wrapper active" : "weather__tab-wrapper"}>
        <div className="tab__name tab__name-forecast">{getContent(cityName)}</div>
        <div className="weather__tab-cards tab-cards">
          {cards}
        </div>
      </div>
    </div>
  )
}

export default WeatherTabCards
