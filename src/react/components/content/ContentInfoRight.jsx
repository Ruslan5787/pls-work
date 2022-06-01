import { useSelector } from "react-redux";
import FavoriteCity from "./FavoriteCity";

function ContentInfoRight({ getCityInfo }) {
  const cities = []
  const favoriteCities = useSelector(state => state.favoriteCities)

  if (favoriteCities) {
    favoriteCities.forEach(city => {
      cities.push(
        <FavoriteCity
          cityName={city}
          key={Math.random()}
          getCityInfo={getCityInfo}
        />
      )
    });
  }

  return (
    <div className="weather__right">
      <h2 className="weather__right-title">added locations:</h2>
      <div className="weather__right-list">{cities}</div>
    </div>
  )
}

export default ContentInfoRight
