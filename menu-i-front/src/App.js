import React from 'react';
import { Switch, Route, Link } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import AppBarD from './components/AppBar';
import MainPage from './components/MainPage';
import ListProducts from './components/ListProducts';
import Tester from './components/Test';
import DetailProduct from './components/DetailProduct';

const styles = {
  bigIconArea: {
    width: "10em",
    height: "10em"
  },
  bigIcon: {
    width: "5em",
    height: "5em"
  },
  text:{
    textAlign: "center",
    padding: "1px"
  }
};

export default function App() {
  return (
    <div className="App">
      <AppBarD />
      <main>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/about" component={About} />
          <Route path="/Home" component={Home} />
          <Route path="/list-product" component={ListProducts} />
          <Route path="/detail-product" component={DetailProduct} />
          <Route component={Error} />
        </Switch>
      </main>
    </div>
  );
}

