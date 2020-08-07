import React from 'react';
import { Switch, Route, Link } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import AppBarD from './components/AppBar';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
      <AppBarD />
      <main>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/about" component={About} />
          <Route path="/Home" component={Home} />
          <Route component={Error} />
        </Switch>
        
        <div>
          <Link to="/">Main Page </Link>
          <br></br>
          <Link to="/home">Home </Link>
          <br></br>
          <Link to="/about">About Us </Link>
        </div>
      </main>
    </div>
  );
}

export default App;
