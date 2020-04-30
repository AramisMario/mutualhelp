import React from 'react';
import {BrowserRouter, Route,Redirect,Switch} from "react-router-dom";
import Home from "./pages/home";
import LoginPage from "./pages/login";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route excat path="/login" component={LoginPage}/>
        {/* <Redirect from="/" to="/home"/> */}
      </Switch>    
    </BrowserRouter>
  );
}

export default App;
