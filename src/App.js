import React from 'react'
import Home from './Pages/Home/Home'
import HomeHeader from './Components/HomeHeader/HomeHeader'

//Cấu hình route
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About'
import Login from './Pages/Login/Login'
import Profile from './Pages/Profile/Profile';
import UseStateDemo from './Pages/_Hooks/UseStateDemo/UseStateDemo';
import DemoUseEffect from './Pages/_Hooks/DemoUseEffect/DemoUseEffect';
import ApiReactClass from './Pages/DemoApi/ApiReactClass';
import ApiFunction from './Pages/DemoApi/ApiFunction';
import DemoHookRedux from './Pages/_Hooks/HookRedux/DemoHookRedux';
import Details from './Pages/Details/Details';
import LoginFormik from './Pages/Login/LoginFormik';
import DemoHoc from './Pages/HOC/DemoHoc';
import Register from './Pages/Register/Register';
import Modal from './Pages/HOC/Modal';
import { HomeTemplate } from './Templates/HomeTemplate/HomeTemplate';
import AdminTemplate  from './Templates/AdminTemplate/AdminTemplate';

//Tạo ra đối tượng giúp chuyển hướng trang ở bất kì file nào trong phạm vi app
import { createBrowserHistory } from 'history';
import Films from './Pages/Admin/Films/Films';
import CreateFilm from './Pages/Admin/CreateFilm/CreateFilm';

export const history = createBrowserHistory();


export default function App() {
  return (
    <Router history={history}>
      <Modal/>
      <Switch>
        {/* Đưuòng dẫn khi ghi đúng sẽ dẫn tới component home */}
        {/* <Route exact path='/home' component={Home} /> */}
        <HomeTemplate path='/home' component={Home}/>
        <HomeTemplate exact path='/about' component={About} />
        <HomeTemplate exact path='/contact' component={Contact} />
        <HomeTemplate exact path='/login' component={Login}/>
        <HomeTemplate exact path='/dangKy' component={Register}/>
        <HomeTemplate exact path='/profile' component={Profile}/>
        {/* <Route exact path='/profile' component={Profile}/> */}
        <Route exact path='/usestate' component={UseStateDemo}/>
        <Route exact path='/useeffect' component={DemoUseEffect}/>
        <Route exact path='/apiclass' component={ApiReactClass}/>
        <Route exact path='/apifunction' component={ApiFunction}/>
        <Route exact path='/hookredux' component={DemoHookRedux}/>
        <Route exact path='/detail/:id' component={Details}/>
        <Route exact path='/loginFormik' component={LoginFormik}/>
        <Route exact path='/demoHoc' component={DemoHoc}/>
        <AdminTemplate exact path="/admin/films" component={Films}/>
        <AdminTemplate exact path="/admin/createFilm" component={CreateFilm}/>
        <HomeTemplate path='/' component={Home} />
      </Switch>
    </Router>
  )
}
