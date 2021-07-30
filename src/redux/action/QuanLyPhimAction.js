import axios from 'axios';
import { GROUP_ID } from '../../Pages/Settings/setting';
import { qlPhimService } from '../../services/QuanLyPhimService';

//Cách 1:
// export const layDanhSachPhimAction = (dispatch) => {

//     let promise = axios({
//             url: 'http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
//             method: 'GET'
//     });

//     //Xử lý thành công
//     promise.then((result)=> {
//         console.log('result', result.data)

//         //Sau khi lấy dữ liệu từ Api trả về => đưa dữ liệu lên reducer
//         dispatch({
//             type: 'SET_DATA_FILMS',
//             arrPhim: result.data.content
//         });
//     });

//     //Xử lý thất bại
//     promise.catch((error)=> {
//         console.log('error', error.response.data);
//     });
// }


//Cách 2:
export const layDanhSachPhimAction = (maNhom='GP01') => {

    return async (dispatch) => {
        //Tuần tự hóa
        try {
            //Async await thường dùng cho các nghiệp vụ thực hiện các promise tuần tự
            const result = await axios({
                url: `http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
                method: 'GET'
            });

            dispatch({
                type: 'SET_DATA_FILMS',
                arrPhim: result.data.content
            })
        } catch(errors) {
            console.log(errors.reponse?.data);
        }

        //Không chờ sẽ chạy tiếp (Dùng trong trường hợp gọi các Api không liên quan nhau)
        // let promise = axios({
        //         url: 'http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
        //         method: 'GET'
        // });

        // //Xử lý thành công
        // promise.then((result)=> {
        //     console.log('result', result.data)

        //     //Sau khi lấy dữ liệu từ Api trả về => đưa dữ liệu lên reducer
        //     dispatch({
        //         type: 'SET_DATA_FILMS',
        //         arrPhim: result.data.content
        //     });
        // });

        // //Xử lý thất bại
        // promise.catch((error)=> {
        //     console.log('error', error.response.data);
        // });
    }
}

export const layChiTietPhim = (maPhim) => {
    return async(dispatch, getState) => {
        try {
            const result = await axios({
                url: `http://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
                method: 'GET'
            })

            dispatch({
                type: 'SET_CHI_TIET_PHIM',
                chiTietPhim:result.data.content
            })
        }catch(errors) {
            console.log(errors.reponse?.data)
        }
    }
}

export const themPhimAction = (frmDataFilm) => {
    return async (dispatch, getState) => {
        try {
            const result = qlPhimService.themPhimUpLoadHinh(frmDataFilm);

            alert('Thêm phim thành công');

            await dispatch(layDanhSachPhimAction(GROUP_ID));

        }catch(errors) {
            console.log(errors.reponse?.data);
        }
    }
}