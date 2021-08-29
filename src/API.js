import axios from 'axios';

export const fetchAllCountries = () => {
   return axios.get('https://restcountries.eu/rest/v2/all')
}