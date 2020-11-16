import React from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import Home from './pages/Home'
import Login from './pages/UserForm/Login';
import SignUp from './pages/UserForm/SignUp';
import ForgotPassword from './pages/UserForm/FogotPassWord';
import Search from './pages/Search';
import CategoryDetail from './pages/CategoryDetail';
import CourseManagement from './pages/Admin/CourseManagement';
import UserManagement from './pages/Admin/UserManagement';
import PageNotFound from './pages/PageNotFound';
import {HomeTemplate} from './templates/homeTemplate'
import { AdminTemplate } from './templates/AdminTemplate';
import Pendingrequest from './pages/PendingCourse';
import Term from './pages/Term';
import CourseEdit from './pages/Admin/CourseEdit';
import UserEdit from './pages/Admin/UserEdit';
import CourseDetailForAdmin from './pages/Admin/CourseDetailForAdmin';
import UserProfile from './pages/UserProfile';
import CourseDetail from './pages/CourseDetail'

function App() {

  return (
    <BrowserRouter>
    <Switch>
    <HomeTemplate exact path='/' Component={Home}/>
      <HomeTemplate exact path='/home' Component={Home}/>
      <Route exact path='/signup' component={SignUp}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/forgotpassword' component={ForgotPassword}/>  
      <HomeTemplate exact path='/coursedetail/:id' Component={CourseDetail}/>
      <AdminTemplate exact path='/admin/coursesmanagement' Component={CourseManagement}/>
      <AdminTemplate exact path='/admin/courseedit' Component={CourseEdit}/>
      <AdminTemplate exact path='/admin/coursedetail/:id' Component={CourseDetailForAdmin}/>
      <AdminTemplate exact path='/admin/usersmanagement' Component={UserManagement}/>
      <AdminTemplate exact path='/admin/useredit' Component={UserEdit}/>
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