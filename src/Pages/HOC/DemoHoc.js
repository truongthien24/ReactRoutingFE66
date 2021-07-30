import React, {useState} from 'react'
import Modal from './Modal';
import Login from '../Login/Login';
import Register from './Register';
import {useDispatch} from 'react-redux'

export default function DemoHoc(props) {
    
    const [Component, setComponent] = useState(<p>Default</p>);
    const dispatch = useDispatch();

    return (
        <div className="container">
            <button className="btn btn-outline-success" data-toggle="modal" data-target="#modelId" onClick={()=> {
                // setComponent(<p>Đăng nhập</p>)
                dispatch({
                    type: 'OPEN_MODAL',
                    Component: Register
                })
            }}>Đăng nhập</button>
            <button className="btn btn-outline-danger" data-toggle="modal" data-target="#modelId" onClick={()=> {
                // setComponent('Đăng ký')
                dispatch({
                    type: 'OPEN_MODAL',
                    Component: Login
                })
            }}>Đăng ký</button>

            {/* <Modal Component={Component}/> */}
        </div>
    )
}
