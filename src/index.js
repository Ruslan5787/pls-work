import React from 'react';
import ReactDOM from 'react-dom/client';

import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from 'react-redux';

import { ACTIONS_TYPES } from "./react/actionsType";
import {App} from './App'
import "./css/reset.css"
import "./css/style.css"

const defaultState = {
  cityInfo: '',
  cityCards: '',
  favoriteCities: [],
}

function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case ACTIONS_TYPES.SET_CITY_INFO:
      return { ...state, cityInfo: action.cityInfo, cityCards: action.cityCards }

    case ACTIONS_TYPES.GET_CITY_INFO:
      return { ...state, cityInfo: action.cityInfo }

    case ACTIONS_TYPES.GET_CITY_CARDS:
      return { ...state, cityCards: { ...state.cityCards, ...action.cityCards } }

    case ACTIONS_TYPES.FAVORITE_CITIES:
      return { ...state, favoriteCities: new Set([...state.favoriteCities, action.favoriteCity])}

    case ACTIONS_TYPES.CHANGED_FAVORITE_CITIES:
      return { ...state, favoriteCities: action.favoriteCities }

    default:
      return state
  }
}

const store = createStore(rootReducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
