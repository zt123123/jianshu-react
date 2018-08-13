import React, { Component } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./store";
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <BrowserRouter>
            <div>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/detail" component={Detail}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
