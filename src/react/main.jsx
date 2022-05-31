import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore, combineReducers } from "redux";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import { ACTIONS_TYPES } from "./actionsType";
import App from './App'

const defaultState = {
  cityInfo: '',
  cityCards: '',
  favoriteCities: new Set(),
}

function setCityInfo(state = '', action) {
  switch (action.type) {
    case ACTIONS_TYPES.SET_CITY_INFO:
      return { ...state, cityInfo: action.cityInfo, cityCards: action.cityCards }
    default:
      return state
  }
}

function getCityInfo(state = '', action) {
  switch (action.type) {
    case ACTIONS_TYPES.GET_CITY_INFO:
      return { ...state, cityInfo: action.cityInfo }

    case ACTIONS_TYPES.GET_CITY_CARDS:
      return { ...state, cityCards: { ...state.cityCards, ...action.cityCards } }
    default:
      return state
  }
}

function favoriteCities(state = [], action) {
  switch (action.type) {
    case ACTIONS_TYPES.FAVORITE_CITIES:
      console.log(state,action);  
      return { ...state, favoriteCities: [action.favoriteCity]}

    case ACTIONS_TYPES.CHANGED_FAVORITE_CITIES:
      return { ...state, favoriteCities: action.favoriteCities }

    default:
      return state
  }
}

const rootReducer = combineReducers({
  setCityInfo,
  getCityInfo,
  favoriteCities
})

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
)
