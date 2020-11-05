import React from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

// COMPONENT
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import CourseDetail from './pages/CourseDetail';
import Search from './pages/Search';
import CategoryDetail from './pages/CategoryDetail';
import CourseManagement from './pages/Admin/CourseManagement';
import UserManagement from './pages/Admin/UserManagement';
import PageNotFound from './pages/PageNotFound';
import {HomeTemplate} from './templates/homeTemplate'
import { AdminTemplate } from './templates/AdminTemplate';
import Pendingrequest from './pages/PendingCourse';
import Term from './pages/Term';
import ForgotPassword from './pages/FogotPassWord';
import UserProfile from './pages/UserProfile';


function App() {

  return (
    <BrowserRouter>
    <Switch>
    <HomeTemplate exact path='/' Component={Home}/>
      <HomeTemplate exact path='/home' Component={Home}/>
      <Route exact path='/signup' component={SignUp}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/forgotpassword' component={ForgotPassword}/>  
      <HomeTemplate exact path='/coursedetail' Component={CourseDetail}/>
      <AdminTemplate exact path='/admin/coursesmanagement' Component={CourseManagement}/>
      <AdminTemplate exact path='/admin/usersmanagement' Component={UserManagement}/>
      <AdminTemplate exact path='/admin/pendingrequest' Component={Pendingrequest}/>
      <HomeTemplate exact path='/search' Component={Search}/>
      <HomeTemplate exact path='/categories/:name' Component={CategoryDetail}/>
      <HomeTemplate exact path='/userprofile' Component={UserProfile}/>
      <HomeTemplate exact path='/term' Component={Term}/>
      <HomeTemplate exact path='*' Component={PageNotFound}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;