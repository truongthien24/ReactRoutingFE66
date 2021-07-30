import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
} from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';
import {useDispatch} from 'react-redux'
import { themPhimAction } from '../../../redux/action/QuanLyPhimAction';

export default function CreateFilm(props) {

    const [state, setState] = useState('https://picsum.photos/id/50/200/300')

    const [componentSize, setComponentSize] = useState('default');

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            tenPhim: '',
            trailer: '',
            moTa: '',
            ngayKhoiChieu: '',
            danhGia: '',
            dangChieu: '',
            sapChieu: '',
            hot: '',
            hinhAnh: null,
        },
        onSubmit: (values) => {

            //Biến đổi json thành formData
            let frmData = new FormData();
            for(let key in values) {
                
                if(key!=='hinhAnh') {
                    frmData.append(key,values[key]);
                }else {
                    if(values.hinhAnh) {
                        frmData.append(key, values.hinhAnh, values.hinhAnh.name);
                    }
                }
                //Log dữ liệu của đối tượng formData ra
                console.log(key, frmData.get(key));
            }

            dispatch(themPhimAction(frmData));

            console.log(values);
        }
    })



    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };


    
    //Dùng cho các trường phức tạp không dùng trực tiếp formik.handleChange được như DatePicker, Switch 
    const handleChangeInput = (event) => {
        // console.log({event})
        let {name, value} = event.target;
        //setFieldValue
        formik.setFieldValue(name,value);

    }

    const handleChangeDatePicker = (date,dateString) => {
        console.log('date', date);
        console.log('dateString', dateString);
        //Dùng moment xử lý dữ liệu lấy từ dataPicker
        const sDate = moment(date).format('DD/MM/YYYY');

        formik.setFieldValue('ngayKhoiChieu', sDate);
    }

    const handleChangeInputNumber = (value) => {
        formik.setFieldValue('danhGia', value);
    }

    
    const handleChangeSwitch = (checked, event) => {
        let {name} = event.target;
        formik.setFieldValue(name, checked);
    }

    const handleChangeInputFile = async (event) => {
        //Lấy ra dữ liệu file người dùng chọn
        if(event.target.files.length > 0) {
            let file = event.target.files[0];
            console.log("file", file);
            //Set value cho formik qua trường hình ảnh
            await formik.setFieldValue('hinhAnh', file);
    
            //đọc file load ảnh ra giao diện
            let reader = new FileReader();
            reader.readAsDataURL(file);
            //Trả về base 64
            reader.onload = async (e) => {
                //setState lại hình ảnh hiển thị
                await setState(e.target.result); //Hình base 64
            }
        }
    }

    return (
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onSubmitCapture={onFormLayoutChange}
                size={componentSize}
            
                onFinish={formik.handleSubmit}
            >
                <h3 className="text-center">Thêm phim mới</h3>
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Tên phim">
                    <Input name="tenPhim" onChange={handleChangeInput}/>
                </Form.Item>
                <Form.Item label="Trailer">
                    <Input name="trailer" onChange={handleChangeInput}/>
                </Form.Item>
                <Form.Item label="Mô tả">
                    <Input name="moTa" onChange={handleChangeInput}/>
                </Form.Item>
                <Form.Item label="Ngày khởi chiếu">
                    <DatePicker name="ngayKhoiChieu" format="DD/MM/YYYY" onChange={handleChangeDatePicker}/>
                </Form.Item>
                <Form.Item label="Đánh giá">
                    <InputNumber name="danhGia" max="10" min="1" type="number" onChange={handleChangeInputNumber}/>
                </Form.Item>
                <Form.Item label="Đang chiếu">
                    <Switch name="dangChieu" onChange={handleChangeSwitch}/>
                </Form.Item>
                <Form.Item label="Sắp chiếu">
                    <Switch name="sapChieu" onChange={handleChangeSwitch}/>
                </Form.Item>
                <Form.Item label="Hot">
                    <Switch name="hot" onChange={handleChangeSwitch}/>
                </Form.Item>
                <Form.Item label="Hình Ảnh">
                    <input type="file" name="hinhAnh" onChange={handleChangeInputFile} accept="image/png, image/jpeg, image/jpg"/>
                    <br></br>
                    <img src={state} style={{width: '100%'}}></img>
                </Form.Item>
                <Form.Item label="Tác vụ">
                    <button className="btn btn-success" type="submit">Thêm phim</button>
                </Form.Item>
            </Form>
    )
}
