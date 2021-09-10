import { FiMoon } from "react-icons/fi";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode, setSearchQuery, setRegion } from "../../redux/actions";
import { useHistory } from "react-router";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);
  const onDarkModeClick = () => {
    dispatch(setDarkMode(darkMode ? false : true));
  };

  const resetAll = ()=>{
    history.push('/?page=1');
    dispatch(setSearchQuery(''));
    dispatch(setRegion(''));
    
  }

  return (
    <div className={`header ${darkMode ? 'header--dark' : ''}`}>
      <div className="header__content">
      <h1 className="header__title" onClick={resetAll}>Where in the world?</h1>
      <div className="header__theme-changer" onClick={onDarkModeClick}>
        <FiMoon />
        <p>Dark Mode</p>
      </div>
      </div>
    </div>
  );
};

export default Header;
