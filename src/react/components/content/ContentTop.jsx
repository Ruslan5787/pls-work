import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUrl, getUrlCityCars } from "../../helpers.js";
import { getCityInfo } from "../../workWithServer.js";
import { ACTIONS_TYPES } from "../../actionsType";

function ContentTop({ updateData }) {
  const dispatch = useDispatch()
  const [userInput, setUserInput] = useState('')

  function handleSubmit(event, nameCity, isClickFavoriteCity) {
    if (event) {
      event.preventDefault()
    }

    const urlCityInfo = getUrl(nameCity)
    const urlCityCards = getUrlCityCars(nameCity)
    
    dispatch(getCityInfo(urlCityInfo, true))
    dispatch(getCityInfo(urlCityCards))

    updateData(handleSubmit)

    if (!isClickFavoriteCity) {
      setUserInput('')
    }
  }

  function handleChange(event) {
    setUserInput(event.target.value)
  }

  return (
    <div className="weather__content-top">
      <form
        className="weather__form"
        onSubmit={(event) => handleSubmit(event, userInput)}
      >
        <input
          className="weather__input"
          type="text"
          placeholder="aktobe"
          value={userInput}
          onChange={handleChange}
        />
        <button className="weather__btn"></button>
      </form>
    </div>
  )
}

export default ContentTop
