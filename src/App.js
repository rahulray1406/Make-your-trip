import React, { Component } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/Home';
import Mytours from './components/mytours/mytours';
import Checkout from './components/Checkout/checkout';
import Error from './components/error/error';
import Footer from './components/footer/footer';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/tours">
              <Mytours/>
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
