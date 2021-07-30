import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { layChiTietPhim } from '../../redux/action/QuanLyPhimAction';

export default function Details(props) {
    console.log('props',props);

    const {chiTietPhim} = useSelector(state => state.QuanLyPhimReducer);
    console.log('Chi tiết phim', chiTietPhim);

    const {id} = props.match.params;

    const dispatch = useDispatch();

    useEffect(()=> {
        //Gọi api
        const action = layChiTietPhim(id);
        //Gọi 1 action thunk (action2 là function)
        dispatch(action);
    },[])

    return (
        <div className="conatiner">
            <div className="row">
                <div className="col-4">
                    <img src={chiTietPhim.hinhAnh}></img>
                </div>
                <div className="col-8">
                    <h3>{chiTietPhim.tenPhim}</h3>
                    <h4>{chiTietPhim.moTa}</h4>
                </div>
            </div>
        </div>
    )
}
