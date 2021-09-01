import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/main";
import {Switch, Route} from 'react-router-dom';
import CountryDetails from "./components/main/catalog/CountryDetails";
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fetchAllCountries} from './API';
import {setAllCountries} from './redux/actions';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllCountries().then((res) => {
      dispatch(setAllCountries(res.data));
      
    });
  }, [dispatch]);
  return (
    
      <div className="App">
           <Header />
             <Switch>
        <Route exact path="/">
      <Main /> 
        </Route>
        <Route path="/:countryName">
          <CountryDetails/>
        </Route>
        </Switch>
    </div>


  );
}

export default App;
