import { actionTypes } from "./actionTypes";

const initialState = {
  darkMode: false,
  allCountries: [],
  searchQuery:"",
  region:""
 
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_DARK_MODE:
      return {
        ...state,
        darkMode: payload,
      };
    case actionTypes.SET_ALL_COUNTRIES:
      return {
        ...state,
        allCountries: payload
      }  
    case actionTypes.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery:payload
      }  
    case actionTypes.SET_REGION:
      return {
        ...state,
        region:payload
      }  
    default:
      return state;
  }
};

export default reducer;