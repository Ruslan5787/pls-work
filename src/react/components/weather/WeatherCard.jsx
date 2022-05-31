import { getUrlPictureWeather } from "../../helpers.js";

function Card({ data }) {
  return (
    <div className="weather__tab-card tab-card">
      <div className="tab-card__header">
        <div className="tab-card__day">{data.dt_txt}</div>
      </div>
      <div className="tab-card__bottom">
        <div className="tab-card__degrees">
          <div className="tab-card__temp">Temperature: <span className="tab-card__temp">{data.main.temp}</span></div>
          <div className="tab-card__temp2">Feels like: <span className="tab-card__temp2">{data.main.feels_like}</span></div>
        </div>
        <div className="tab-card__precipitation card__precipitation">
          <span className="card__precipitation-text">{data.weather[0].main}</span>
          <img className="card__precipitation-img" src={getUrlPictureWeather(data.weather[0].icon)} />
        </div>
      </div>
    </div>
  )
}

export default Card