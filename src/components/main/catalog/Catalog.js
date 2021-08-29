import "./catalog.css";
import { useEffect, useState } from "react";
import { fetchAllCountries } from "../../../API.js";
import { useSelector, useDispatch } from "react-redux";
import { setAllCountries } from "../../../redux/actions";
import Paginate from "./Paginate";

const Catalog = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);
  const darkMode = useSelector((state) => state.darkMode);
  const searchQuery = useSelector((state) => state.searchQuery);
  const region = useSelector((state) => state.region);

  const countries = allCountries.filter(
    (country) =>
      country.name.toUpperCase().includes(searchQuery.toUpperCase()) &&
      country.region.includes(region)
  );

console.log(countries);
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 20;
  const pages = Math.ceil(countries.length/countriesPerPage);
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentPageCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const onChangePage = (value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    fetchAllCountries().then((res) => {
      dispatch(setAllCountries(res.data));
      
    });
  }, [dispatch]);
  return (
    <div className="catalog">
      <div className="catalog__countries">
        {currentPageCountries &&
          currentPageCountries.map((country) => (
            <div
              className={`catalog__country ${
                darkMode ? "catalog__country--dark" : ""
              }`}
              key={country.name}
            >
              <img className="country__flag" src={country.flag} alt="" />
              <div className="country__info">
                <h4 className="country__name">{country.name}</h4>
                <ul className="country__properties">
                  <li className="country__property">
                    <strong>Population: </strong>
                    <span>{country.population}</span>
                  </li>
                  <li className="country__property">
                    <strong>{country.region} </strong>
                    <span>Europe</span>
                  </li>
                  <li className="country__property">
                    <strong>{country.capital} </strong>
                    <span>Berlin</span>
                  </li>
                </ul>
              </div>
            </div>
          ))}
      </div>
      <Paginate pages={pages} onChangePage={onChangePage} />
    </div>
  );
};

export default Catalog;
