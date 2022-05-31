import { ACTIONS_TYPES } from "./actionsType";

function getCityInfo(url, isCityInfo) {
  return async function (dispatch) {
    try {
      const response = await fetch(url)
      const cityInfo = await response.json()
      const isRequestOk = parseInt(cityInfo.cod) === 200

      if (isRequestOk) {

        if (isCityInfo) {
          dispatch({ type: ACTIONS_TYPES.GET_CITY_INFO, cityInfo: cityInfo })
        } else {
          dispatch({ type: ACTIONS_TYPES.GET_CITY_CARDS, cityCards: cityInfo })
        }

      } else {
        throw new Error('Не правильно ввели название города.');
      }

    } catch (error) {
      alert(error);
    }
  }
}

export { getCityInfo }
