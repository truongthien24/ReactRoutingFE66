import React from 'react'
import { NavLink } from 'react-router-dom'

import {useSelector} from 'react-redux'
import { Fragment } from 'react';
import { ACCESS_TOKEN, USER_LOGIN } from '../../Pages/Settings/setting';

export default function HomeHeader(props) {

    const {userLogin} = useSelector(state => state.QuanLyNguoiDungReducer);

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/home" activeClassName="bg-white text-dark" activeStyle={{border: '1px solid red'}}>Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/loginFormik" activeClassName="bg-white text-dark" activeStyle={{border: '1px solid red'}}>Formik</NavLink>
                    </li>
                    {userLogin ? 
                    <Fragment>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/profile" activeClassName="bg-white text-dark" activeStyle={{border: '1px solid red'}}>Hello ! {userLogin.hoTen}</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={()=> {
                                //Xóa localStorage và reload lại trang
                                localStorage.removeItem(USER_LOGIN);
                                localStorage.removeItem(ACCESS_TOKEN);
                                //Reload 
                                window.location.reload();
                            }}>Đăng xuất</a>
                        </li>
                    </Fragment>
                    :
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login" activeClassName="bg-white text-dark" activeStyle={{border: '1px solid red'}}>Login</NavLink>
                    </li> 
                    }
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hook</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            {/* <NavLink className="dropdown-item" to="/contact" activeClassName="bg-white text-dark" activeStyle={{border: '1px solid red'}}>Contact</NavLink> */}
                            <NavLink className="dropdown-item" to="/usestate">Use state</NavLink>
                            <NavLink className="dropdown-item" to="/useeffect">Use Effect</NavLink>
                            <NavLink className="dropdown-item" to="/hookredux">Hook redux</NavLink>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Api</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <NavLink className="dropdown-item" to="/apiclass" activeClassName="bg-white text-dark" activeStyle={{border: '1px solid red'}}>API class</NavLink>
                            <NavLink className="dropdown-item" to="/apifunction" activeClassName="bg-white text-dark" activeStyle={{border: '1px solid red'}}>API function</NavLink>
                        </div>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/demoHOC" activeClassName="bg-white text-dark" activeStyle={{border: '1px solid red'}}>Demo HOC</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/dangKy" activeClassName="bg-white text-dark" activeStyle={{border: '1px solid red'}}>Đăng ký</NavLink>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

    )
}
