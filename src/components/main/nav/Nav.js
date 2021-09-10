import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./nav.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { setRegion, setSearchQuery } from "../../../redux/actions";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { setPage } from "../../../redux/actions";
const Nav = () => {
  const history = useHistory();

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();

  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);
  const [showCategories, setShowCategories] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [continent, setContinent] = useState("");
  const onCategoryClick = () => {
    setShowCategories(showCategories ? false : true);
  };

  const onRegionClick = (e) => {
    dispatch(setRegion(e.target.innerText));
    setContinent(e.target.innerText);
    e.target.innerText && searchValue
      ? history.push(`/?search=${searchValue}&region=${e.target.innerText}`)
      : history.push(`/?region=${e.target.innerText}`);
    dispatch(setPage(1))
  };

  const onSearch = () => {
    dispatch(setSearchQuery(searchValue));
    searchValue && (continent
      ? history.push(`/?region=${continent}&search=${searchValue}`)
      : history.push(`/?search=${searchValue}`));
    !searchValue && history.push('/');
    dispatch(setPage(1))
  };

  useEffect(() => {
    query.get("search") && dispatch(setSearchQuery(query.get("search")));
    query.get("region") && dispatch(setRegion(query.get("region")));
    query.get("page") && dispatch(setPage(Number(query.get("page"))))
  }, [dispatch, query]);

  useEffect(() => {
    !query.get("search") && dispatch(setSearchQuery(""));
    !query.get("region") && dispatch(setRegion(""));
  }, [query, dispatch]);

  return (
    <div className="nav">
      <div className={`nav__search ${darkMode ? "nav__search--dark" : ""}`}>
        <AiOutlineSearch className="nav__search-icon" onClick={onSearch} />
        <input
          className="nav__search-input"
          type="text"
          placeholder="Search for a country..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className={`nav__category ${darkMode ? "nav__category--dark" : ""}`}>
        <div className="category__title" onClick={onCategoryClick}>
          <h4>{query.get('region') ? query.get('region') : 'Filter by Region'}</h4>
          {showCategories ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {showCategories && (
          <div className="category__options" onClick={onCategoryClick}>
            <div className="category__option" onClick={onRegionClick}>
              Africa
            </div>
            <div className="category__option" onClick={onRegionClick}>
              America
            </div>
            <div className="category__option" onClick={onRegionClick}>
              Asia
            </div>
            <div className="category__option" onClick={onRegionClick}>
              Europe
            </div>
            <div className="category__option" onClick={onRegionClick}>
              Oceania
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
