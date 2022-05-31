import WeatherTabMain from "../weather/WeatherTabMain";
import WeatherTabDetails from "../weather/WeatherTabDetails";
import WeatherTabCards from "../weather/WeatherTabCards";

function WeatherTabs() {

  return (
    <div className="weather__tabs">
      <WeatherTabMain />
      <WeatherTabDetails />
      <WeatherTabCards />
    </div>
  )
}

export default WeatherTabs
