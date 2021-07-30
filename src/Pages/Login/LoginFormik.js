import React, {useState} from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup';

export default function LoginFormik(props) {

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            email: '',
            matKhau: ''
        },

        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required('Không được bỏ trống!'),
            email: Yup.string().required('Email không được bỏ trống!').email('Email không hợp lệ !'),
            matKhau: Yup.string().required('Mật khẩu không được bỏ trống').min(6, 'Mật khẩu độ dài từ 6 - 8 ký tự').max(8, 'Mật khẩu độ dài từ 6 - 8')
        }),

        onSubmit: (values) => {
            console.log('values', values);
        }
    })

    const handleChangeDate = (event) => {
        let {value} = event.target;
        formik.setFieldValue('ngaySinh', value);  //SEt giá trị cho lỗi => tự customize
        //formmik.setFieldError('ngaySinh', '....') //Set giá trị cho lỗi => tự customize
    }

    return (
        <form className="container" onSubmit={formik.handleSubmit}>
            Login
            <div className="form-group">
                <p>Username</p>
                <input type="text" className="form-control" name="taiKhoan" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                <div className="text-danger">
                    {formik.errors.taiKhoan && formik.touched.taiKhoan ? (<div>{formik.errors.taiKhoan}</div>): null}
                </div>
            </div>
            <div className="form-group">
                <p>Password</p>
                <input type="password" className="form-control" name="matKhau" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                <div className="text-danger">
                {formik.errors.matKhau && formik.touched.matKhau ? (<div>{formik.errors.matKhau}</div>): null}
                </div>
            </div>
            <div className="form-group">
                <input type="date" className="form-control" onChange={handleChangeDate}/>
            </div>
            <div className="form-group">
                <p>Email: </p>
                <input typeEmail="email" className="form-control" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                <div className="text-danger">
                {formik.errors.email && formik.touched.email ? (<div>{formik.errors.email}</div>): null}
                </div>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-outline-success">Login</button>
            </div>
        </form>
    )
}
