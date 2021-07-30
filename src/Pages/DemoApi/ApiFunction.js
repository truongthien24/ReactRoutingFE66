import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import { layDanhSachPhimAction } from '../../redux/action/QuanLyPhimAction';

export default function ApiFunction() {
    
    const {arrPhim} = useSelector(state => state.QuanLyPhimReducer)
    // const [arrPhim,setArrPhim] = useState([]);
    const dispatch = useDispatch();


    useEffect(()=> {
        // let promise = axios({
        //     url: 'http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
        //     method: 'GET'
        // });

        // //Xử lý thành công
        // promise.then((result)=> {
        //     console.log('result', result.data)

        //     //Sau khi lấy dữ liệu từ Api trả về => đưa vào state thông qua hàm setState
        //     setArrPhim(result.data.content);
        // });

        // //Xử lý thất bại
        // promise.catch((error)=> {
        //     console.log('error', error.response.data);
        // });
        
        
        /*
            dispatch(action): 
            + action 1: object {type: 'ten_action', payload: data}
            + action 2: function => thưc thi xong mới có kết quả để dispatch 
        */

        //Gọi 1 hàm kết quả trả về là 1 hàm chưa gọi (callback function) closure function
        // const action = layDanhSachPhimAction();

        const action = layDanhSachPhimAction();
        dispatch(action);
    },[]);
    
    const renderPhim = () => {
        return arrPhim.map((item,index)=> {
            return <div className="col-4" key={index}>
                <div className="card">
                    <img src={item.hinhAnh} alt="..."></img>
                    <div className="card-body">
                        <h3>{item.tenPhim}</h3>
                        <p>{item.moTa}</p>
                    </div>
                </div>
            </div> 
        })
    }

    return (
        <div className="container mt-2">
            <h3>Danh sách phim</h3>
            <div className="row">
                {renderPhim()}
            </div>
        </div>
    )
}
