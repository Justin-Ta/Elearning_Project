import React from 'react';
import './App.scss';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
// import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import SignUp from './pages/SignUp';
<<<<<<< HEAD
import {HomeTemplate} from './templates/homeTemplate'
import CourseDetail from './pages/CourseDetail';

// import { HomeTemplate } from './templates/homeTemplate';
=======
import {HomeTemplate} from './templates/homeTemplate';
import Search from './pages/Search';
import CategoryDetail from './pages/CategoryDetail';
>>>>>>> 73aa45d60f836c1849fc9643b832a97b1c899efd
import 'antd/dist/antd.css';
import { AdminTemplate } from './templates/AdminTemplate';
import CourseManagement from './pages/CourseManagement';
import UserManagement from './pages/UserManagement';


function App() {

  return (
    <BrowserRouter>
    <Switch>
    <HomeTemplate exact path='/' Component={Home}/>
      <HomeTemplate exact path='/home' Component={Home}/>
      <Route exact path='/signup' component={SignUp}/>
      <Route exact path='/login' component={Login}/>
<<<<<<< HEAD
      {/* <HomeTemplate exact path='/coursedetail/:id' Component={CourseDetail}/> */}
      <HomeTemplate exact path='/coursedetail' Component={CourseDetail}/>
      <AdminTemplate exact path='/admin/coursesmanagement' Component={CourseManagement}/>
      <AdminTemplate exact path='/admin/usersmanagement' Component={UserManagement}/>
=======
      <HomeTemplate exact path='/search' Component={Search}/>
      <HomeTemplate exact path='/categories/:name' Component={CategoryDetail}/>
>>>>>>> 73aa45d60f836c1849fc9643b832a97b1c899efd
      <HomeTemplate exact path='*' Component={PageNotFound}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;