import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/';
import PageNotFound from './pages/PageNotFound';
import { HomeTemplate } from './templates/homeTemplate';
import 'antd/dist/antd.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <HomeTemplate exact path='/' Component={Home}/>
      <HomeTemplate exact path='/home' Component={Home}/>
      <HomeTemplate exact path='*' Component={PageNotFound}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
 