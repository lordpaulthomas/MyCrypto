import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Prices from "./pages/Prices";



function App () {
return(
  <Router>
    <Switch>
      <Route exact path='/' component={Prices}/>
      <Route exact path='/price' component={Prices}/>
    </Switch>
  </Router>
)

}

export default App;
