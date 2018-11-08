import React, { Component } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./store";
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import PoliceLogo from "./static/police.jpg";

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/detail/:id" component={Detail}></Route>
            <footer className="footer">
              <div className="beiwrapper">
                <a className="beiurl" style={{verticalAlign:"top",marginRight:"20px"}} target="_blank" rel="noopener noreferrer" href="http://www.miitbeian.gov.cn/">鄂ICP备18024171号</a>
                
                <img src={PoliceLogo} alt="" />
                <a className="beiurl" target="_blank" rel="noopener noreferrer" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42011102002849">
                  <p className="beinumber">鄂公网安备 42011102002849号</p>
                </a>
                
              </div>
              	<span>友情链接</span><a target="_blank" rel="noopener noreferrer" href="https://m.kuaidi100.com/" target="_blank">快递查询</a>
              <div>
              </div>
            </footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
