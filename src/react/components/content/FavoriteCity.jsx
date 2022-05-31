import { useDispatch, useSelector } from "react-redux"
import { ACTIONS_TYPES } from "../../actionsType";

function FavoriteCity({ cityName, getCityInfo }) {
  const dispatch = useDispatch()
  const favoriteCities = useSelector(state => state.favoriteCities)

  function deleteFavoriteCity() {
    let changedFavoriteCities = []

    favoriteCities.forEach(city => {
      if (city !== cityName) {
        changedFavoriteCities.push(city)
      }
    })

    dispatch({ type: ACTIONS_TYPES.CHANGED_FAVORITE_CITIES, favoriteCities: changedFavoriteCities })
  }

  return (
    <div className="weather__right-block" >
      <div
        className="weather__right-item"
        onClick={() => getCityInfo(false, cityName, true)}>{cityName}</div>
      <button
        className="weather__right-btn"
        onClick={deleteFavoriteCity}
      />
    </div>
  )
}

export default FavoriteCity
