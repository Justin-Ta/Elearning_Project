import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import { HomeTemplate } from './templates/homeTemplate';

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
 