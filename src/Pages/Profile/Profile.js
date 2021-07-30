import React, {useEffect} from 'react'
import {Redirect} from 'react-router'
import { USER_LOGIN } from '../Settings/setting'
import {useDispatch, useSelector} from 'react-redux'
import { getProfileAction } from '../../redux/action/QuanLyNguoiDungAction';
export default function Profile(props) {
    
    const {profile} = useSelector(state=> state.QuanLyNguoiDungReducer);
    
    const dispatch = useDispatch();

    useEffect(()=> {
        //Bắt sự kiện sau khi render => call api
        dispatch(getProfileAction())
    },[]);

    if(!localStorage.getItem(USER_LOGIN)) {
        alert('Đăng nhập để vào trang này !');
        return <Redirect to='/login' />
    }

    return (
        <div>
            
            
            Hello {profile.hoTen}

        </div>
    )
}
