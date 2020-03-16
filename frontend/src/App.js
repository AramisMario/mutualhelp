import React from 'react';
import {BrowserRouter, Route,Redirect,Switch} from "react-router-dom";
import Home from "./pages/home";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Redirect from="/" to="/home"/>
      </Switch>    
    </BrowserRouter>
  );
}

export default App;
