import React from 'react';
import {Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import './sass/theme.scss';
import Home from './pages/Home'
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import SignUp from './pages/SignUp';
import {HomeTemplate} from './templates/homeTemplate'
// import { HomeTemplate } from './templates/homeTemplate';
import 'antd/dist/antd.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <HomeTemplate exact path='/' Component={Home}/>
      <HomeTemplate exact path='/home' Component={Home}/>
      <Route exact path='/signup' component={SignUp}/>
      <Route exact path='/login' component={Login}/>
      <HomeTemplate exact path='*' Component={PageNotFound}/>
    </Switch>
    </BrowserRouter> 
  );
}

export default App;
 