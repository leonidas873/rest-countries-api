import Nav from "./nav/Nav";
import './main.css';
import Catalog from './catalog/Catalog';
import { useSelector } from "react-redux";

const Main = () => {

  const darkMode = useSelector(state=>state.darkMode);

  return (
    <div className={`main ${darkMode ? 'main--dark' : ''}`}>
        <div className="main__content">
        <Nav />
        <Catalog/>
        </div>
    </div>
  );
};

export default Main;
