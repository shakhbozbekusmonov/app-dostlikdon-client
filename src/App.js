import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./sass/main.scss";
import NavBar from "./components/NavBar";
import NavBarTwo from "./components/NavBar-Two";
import News from "./components/News";
import Footer from "./components/Footer";
import More from "./components/More";

const App = () => {
  return (
      <BrowserRouter>
          <NavBar/>
          <NavBarTwo/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
            <Route path="/more" exact component={More}/>
        </Switch>
          <Footer/>
      </BrowserRouter>
  );
};

export default App;
