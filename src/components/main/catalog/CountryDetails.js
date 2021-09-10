import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { fetchSingleCountry } from "../../../API";
import "./countryDetails.css";
import { MdKeyboardBackspace } from "react-icons/md";
import { useSelector } from "react-redux";
const CountryDetails = () => {
  const countries = useSelector((state) => state.allCountries);
  const darkMode = useSelector((state) => state.darkMode);
  const history = useHistory();
  const { countryName } = useParams();
  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetchSingleCountry(countryName).then((res) => setCountry(res.data[0]));
  }, [countryName]);
  const Borders = () => {
    const borders = [];
    if (Boolean(countries) && Boolean(country.borders)) {
      country.borders.map((border) =>
        countries.forEach((element) => {
          if (element.alpha3Code === border) borders.push(element.name);
        })
      );
    }

    return (
      <span className="borders">
        {borders.map((border) => (
          <span
            className={darkMode ? "border--darkMode" : "border"}
            key={borders.indexOf(border)}
            onClick={() => history.push(`/${border}`)}
          >
            {border}
          </span>
        ))}
      </span>
    );
  };

  return (
    <div className={darkMode ? "country-details--darkMode" : "country-details"}>
      {country && (
        <div className="country-details__content">
          <Button
            className={
              darkMode
                ? "country-details__btn--darkMode"
                : "country-details__btn"
            }
            startIcon={<MdKeyboardBackspace />}
            onClick={() => history.goBack()}
          >
            Back
          </Button>
          <div className="country-details__cols-wrapper">
            <div className="country-details__col">
              <img
                className="country-details__flag"
                src={country.flag}
                alt=""
              />
            </div>
            <div className="country-details__col">
              <h3 className="country-details__name">{country.name}</h3>
              <div className="country-details__sub-col-wrapper">
                <div className="country-details__sub-col">
                  <h4 className="sub__col-info">
                    <strong>Native Name: </strong>
                    {country.nativeName}
                  </h4>
                  <h4 className="sub__col-info">
                    <strong>Population: </strong>
                    {country.population}
                  </h4>
                  <h4 className="sub__col-info">
                    <strong>Region: </strong>
                    {country.region}
                  </h4>
                  <h4 className="sub__col-info">
                    <strong>Sub Region: </strong>
                    {country.subregion}
                  </h4>
                  <h4 className="sub__col-info">
                    <strong>Capital: </strong>
                    {country.capital}
                  </h4>
                </div>
                <div className="country-details__sub-col">
                  <h4 className="sub__col-info">
                    <strong>Top Level Domain: </strong>
                    {Boolean(country.topLevelDomain) &&
                      country.topLevelDomain[0]}
                  </h4>
                  <h4 className="sub__col-info">
                    <strong>Currencies: </strong>
                    {Boolean(country.currencies) &&
                      country.currencies.map((cur) => (
                        <span className="currency" key={cur.name}>
                          {cur.name}
                        </span>
                      ))}
                  </h4>
                  <h4 className="sub__col-info">
                    <strong>Languages: </strong>
                    {Boolean(country.languages) &&
                      country.languages.map((lan) => (
                        <span className="lan" key={lan.name}>
                          {lan.name}
                        </span>
                      ))}
                  </h4>
                </div>
              </div>
              <div className="country-details__borders">
                <strong>Border Countries: </strong>
                {Boolean(country.borders) &&
                  (Boolean(country.borders.length) ? (
                    <Borders />
                  ) : (
                    <span>Doesn't have border countries</span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
