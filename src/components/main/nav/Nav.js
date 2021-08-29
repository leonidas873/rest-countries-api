import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import "./nav.css";
import {useState} from 'react';
import { useSelector } from "react-redux";
import { setRegion, setSearchQuery } from "../../../redux/actions";
import { useDispatch } from "react-redux";

const Nav = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector(state=>state.darkMode);
    const [showCategories,setShowCategories] = useState(false);
    const [searchValue,setSearchValue] = useState('')
    const [categoryTitle,setCategoryTitle] = useState('Filter by Region')
    const onCategoryClick = () => {
        setShowCategories(showCategories ? false : true)
    }

    const onRegionClick = (e) => {
      dispatch(setRegion(e.target.innerText));
     setCategoryTitle(e.target.innerText);
    }

    const onSearch = () => {
      dispatch(setSearchQuery(searchValue));
     
    }

  return (
    <div className="nav">
      <div className={`nav__search ${darkMode ? 'nav__search--dark' : ''}`}>
        <AiOutlineSearch className="nav__search-icon" onClick={onSearch}/>
        <input
          className="nav__search-input"
          type="text"
          placeholder="Search for a country..."
          value={searchValue}
          onChange={e=>setSearchValue(e.target.value)}
        />
      </div>
      <div className={`nav__category ${darkMode ? 'nav__category--dark' : ''}`}>
        <div className="category__title"  onClick={onCategoryClick}>
          <h4>{categoryTitle}</h4>
          {showCategories ? <IoIosArrowUp/> : <IoIosArrowDown />} 
        </div>
        {showCategories && <div className="category__options" onClick={onCategoryClick}>
          <div className="category__option" onClick={onRegionClick}>Africa</div>
          <div className="category__option" onClick={onRegionClick}>America</div>
          <div className="category__option" onClick={onRegionClick}>Asia</div>
          <div className="category__option" onClick={onRegionClick}>Europe</div>
          <div className="category__option" onClick={onRegionClick}>Oceania</div>
        </div> }
      </div>
    </div>
  );
};

export default Nav;
