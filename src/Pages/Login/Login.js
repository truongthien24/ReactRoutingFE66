import React, {useState} from 'react'
import {useFormik} from 'formik'
import {useDispatch} from 'react-redux'
import { dangNhapAction } from '../../redux/action/QuanLyNguoiDungAction';

export default function Login(props) {

    // const [state, setState] = useState({
    //     values: {taiKhoan: '', matKhau: '', email: ''},
    //     errors: {taiKhoan: '', matKhau: '', email: ''}
    // })

    // const handleChangeInput = (event) => {
    //     let {value, name} = event.target; //{name: "taiKhoan", value: "Nguyễn Văn A"}

    //     //Lấy ra 1 thuộc tính (attribute) tự đặt trên thẻ
    //     let typeEmail = event.target.getAttribute('typeEmail'); //=> email


    //     //Xử lý values
    //     let newValues = {...state.values};
    //     newValues[name] = value;

    //     //Xử lý errors
    //     let newErrors = {...state.errors};

    //     let messageError = '';
    //     if(newValues[name].trim() === '') {
    //         messageError = name + ' không được bỏ trống !';
    //     }

    //     if(typeEmail === 'email') {
    //         //check email
    //         let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //         if(!regexEmail.test(newValues[name])) {
    //             messageError = 'Email không hợp lệ !';
    //         }
    //     }

    //     newErrors[name] = messageError;
        
    //     setState({
    //         values: newValues,
    //         errors: newErrors
    //     })
    //     console.log(state)
    // }

    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },
        onSubmit: (values) => {
            dispatch(dangNhapAction(values));
        }
    })

    return (
        <form className="container" onSubmit={formik.handleSubmit}>
            <h3>Đăng nhập</h3>
            {/* <div className="form-group">
                <p>Username</p>
                <input type="text" className="form-control" name="taiKhoan" value={state.values.taiKhoan} onChange={handleChangeInput}/>
                <p className="text-danger">{state.errors.taiKhoan}</p>
            </div>
            <div className="form-group">
                <p>Password</p>
                <input type="password" className="form-control" name="matKhau" value={state.values.matKhau} onChange={handleChangeInput}/>
                <p className="text-danger">{state.errors.matKhau}</p>
            </div>
            <div className="form-group">
                <p>Email: </p>
                <input typeEmail="email" className="form-control" name="email" value={state.values.email} onChange={handleChangeInput}/>
                <p className="text-danger">{state.errors.email}</p>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-outline-success">Login</button>
            </div> */}
            <div className="form-group">
                <p>Tài khoản</p>
                <input className="form-control" name="taiKhoan" onChange={formik.handleChange}></input>
            </div>
            <div className="form-group">
                <p>Mật khẩu</p>
                <input type="password" className="form-control" name="matKhau" onChange={formik.handleChange}></input>
            </div>
            <div className="form-group">
                <button className="btn btn-outline-success">Đăng nhập</button>
            </div>
        </form>
    )
}
