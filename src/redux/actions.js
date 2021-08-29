import { actionTypes } from "./actionTypes";

export const setDarkMode = (bool) => {
  return {
    type: actionTypes.SET_DARK_MODE,
    payload: bool,
  };
};

export const setAllCountries = (countries) => {
  return {
    type: actionTypes.SET_ALL_COUNTRIES,
    payload: countries
  }
}

export const setSearchQuery = (query) => {
  return {
    type: actionTypes.SET_SEARCH_QUERY,
    payload: query
  }
}

export const setRegion = (region) => {
  return {
    type:actionTypes.SET_REGION,
    payload: region
  }
}