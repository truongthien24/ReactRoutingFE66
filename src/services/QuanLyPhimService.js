import axios from 'axios'
import { DOMAIN } from '../Pages/Settings/setting';
import { baseService } from './baseService';
export class QuanLyPhimSevices extends baseService {
    
    
    themPhimUpLoadHinh = (frmDataFilm) => {
        console.log("frmDataFilm", frmDataFilm);
        return this.post('/api/quanlyphim/themphimuploadhinh', frmDataFilm);
    }


}

export const qlPhimService = new QuanLyPhimSevices();