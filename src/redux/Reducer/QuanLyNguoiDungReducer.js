import { USER_LOGIN } from "../../Pages/Settings/setting";

let usLogin = null;

if(localStorage.getItem(USER_LOGIN)) {
    usLogin = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const stateDefault = {
    userLogin: usLogin,

    profile: {
        "taiKhoan": "",
        "matKhau": "",
        "hoTen": "default",
        "email": "",
        "soDT": null,
        "maNhom": "",
        "loaiNguoiDung": null,
        "thongTinDatVe": []
    },
}

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch(action.type) {

        case 'DANG_NHAP': {
            state.userLogin = action.userLogin;
            return {...state};
        }
        break;
        case 'SET_PROFILE': {
            state.profile = action.profile;
            console.log('action profile', action.profile);
            return {...state};
        }
        break;

        default: return state;
    }
}