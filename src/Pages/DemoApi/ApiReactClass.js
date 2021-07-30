import React, { Component } from 'react'
import axios from 'axios'
import { QuanLyPhimReducer } from '../../redux/Reducer/QuanLyPhimReducer'
import { layDanhSachPhimAction } from '../../redux/action/QuanLyPhimAction'
import {connect} from 'react-redux'

export default class ApiReactClass extends Component {

    state = {
        arrPhim: []
    }

    getApi = () => {

        let promise = axios({
            url: 'http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            method: 'GET'
        });

        //Xử lý thành công
        promise.then((result)=> {
            console.log('result', result.data)

            //Sau khi lấy dữ liệu từ Api trả về => đưa vào state thông qua hàm setState
            this.setState({
                arrPhim: result.data.content
            })
        });

        //Xử lý thất bại
        promise.catch((error)=> {
            console.log('error', error.response.data);
        });
        // const action = layDanhSachPhimAction();
        // this.props.dispatch(action);
    }

    renderPhim = () => {
        return this.state.arrPhim.map((item, index)=> {
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


    render() {
        return (
            <div className="container">
                <button className="btn btn-success" onClick={()=>{
                    this.getApi()
                }}>Get api phim</button>
                <h3>Danh sách phim</h3>
                <div className="row">
                    {this.renderPhim()}
                </div>
            </div>
        )
    }

    //Cload tự động, sau khi render sẽ chạy getApi()
    componentDidMount() {
        this.getApi();
    }
}

// const mapStateToProps = (state) => {
//     arrPhim: state.QuanLyPhimReducer.arrPhim;
// };

// export default connect(mapStateToProps)(ApiReactClass);