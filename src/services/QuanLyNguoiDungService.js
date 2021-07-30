import axios from 'axios'
import { DOMAIN } from '../Pages/Settings/setting';
import { baseService } from './baseService';
export class QuanLyNguoiDungSevices extends baseService {
    
    
    dangKy = (thongTinNguoiDung) => {
        return  this.post('/api/quanlynguoidung/dangky',thongTinNguoiDung);
    }

    danhNhap = (thongTinNguoiDung) => {
        return this.post('/api/quanlynguoidung/dangnhap', thongTinNguoiDung);
    }


}

export const qlNguoiDungService = new QuanLyNguoiDungSevices();