import axios from 'axios';

export const fetchAllCountries = () => {
   return axios.get('https://restcountries.com/v2/all')
}

export const fetchSingleCountry = (name) => {
   return axios.get(`https://restcountries.com/v2/name/${name}`)
}