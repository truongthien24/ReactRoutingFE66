import axios from 'axios';
import {history} from '../../App';
import { ACCESS_TOKEN, DOMAIN, USER_LOGIN } from '../../Pages/Settings/setting';
import { qlNguoiDungService } from '../../services/QuanLyNguoiDungService';

//thongTinNguoiDung
// {
//     "taiKhoan": "string",
//     "matKhau": "string",
//     "email": "string",
//     "soDt": "string",
//     "maNhom": "string",
//     "hoTen": "string"
//   }
export const dangKyAction = (thongTinNguoiDung) => {

    return async dispatch => {

        try {

            // const result = await axios({
            //     url: `${DOMAIN}/api/QuanLyNguoiDung/DangKy`,
            //     method: 'post',
            //     data: thongTinNguoiDung
            // })

            const result = await qlNguoiDungService.dangKy(thongTinNguoiDung);
            console.log({result});

        }catch(error) {
            console.log({error})
        }

    }

}

export const dangNhapAction = (thongTinNguoiDung) => {
    return async dispatch => {
        try {
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyNguoiDung/DangNhap`,
                method: 'post',
                data: thongTinNguoiDung  //data là phần body (header, body, footer)
            })
            console.log({result})

            localStorage.setItem(USER_LOGIN, JSON.stringify(result.data.content));
            localStorage.setItem(ACCESS_TOKEN, result.data.content.accessToken);

            dispatch({
                type: 'DANG_NHAP',
                userLogin: result.data.content
            })

            //Sau khi đăng nhập thành công => chuyển hướng trang 
            //Dùng history để chuyển trang tương ứng với bên trong component là props.history.push
            history.push('/home');

        }catch(error) {
            console.log({error})
        }
    }
}

export const getProfileAction = () => {
    return async dispatch => {
        try {
            const result = await axios({
                url: `${DOMAIN}/api/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
                method: 'post',
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
                }
            })
            
            //Sau khi có dữ liệu từ api => dispatch lên reducer
            dispatch({
                type: 'SET_PROFILE',
                profile: result.data.content
            }) 
        }catch(error) {

        }
    }
}