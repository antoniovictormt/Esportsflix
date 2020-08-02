import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import registerVideo from './pages/Register/Video';
import registerCategory from './pages/Register/Category';
import pageError404 from './pages/Page404';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/register/video" component={registerVideo} />
      <Route path="/register/category" component={registerCategory} />
      <Route component={pageError404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
