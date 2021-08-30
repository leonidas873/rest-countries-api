import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/main";
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    
      <div className="App">
             <Switch>
        <Route path="/">
          <h1>home</h1>
      <Header />
      <Main /> 
        </Route>
        </Switch>
    </div>


  );
}

export default App;
