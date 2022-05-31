import { API } from "./Api_Weather.js";

function getStyleClass(id, state, tabsContent) {
  if (tabsContent) {
    if (state === id) {
      return "weather__tab tab-active"
    }
    return "weather__tab"

  } else {
    if (state === id) {
      return "weather__tabs-btn btn-active"
    }
    return "weather__tabs-btn"
  }
}

const HELPER_FOR_URL = {
  getUrl: (value) => {
    return `${API.WETHER_URL}?q=${value}&appid=${API.KEY}${API.DEGREES_CELSIUS}`;
  },
  getUrlCityCars: (value) => {
    return `${API.FORECAST_URL}?q=${value}&appid=${API.KEY}${API.DEGREES_CELSIUS}`;
  },
  getUrlPictureWeather: (value) => {
    return `http://openweathermap.org/img/wn/${value}@2x.png`
  },
};

function getContent(data, func) {
  if (func && data) {
    return func(data)
  }

  if (data) {
    return data
  }
  return ''
}

export const getUrl = HELPER_FOR_URL.getUrl;
export const getUrlCityCars = HELPER_FOR_URL.getUrlCityCars;
export const getUrlPictureWeather = HELPER_FOR_URL.getUrlPictureWeather;
export { getStyleClass, getContent }
