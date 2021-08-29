import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/main";
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
      <div className="App">
      <Header />
      <Main />
    </div>
      </Route>
    </Switch>

  );
}

export default App;
