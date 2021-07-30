

const stateDefault = {
    arrPhim: [
        {maPhim: 1, tenPhim: 'test 1', hinhAnh: 'https://picsum.photos/id/20/200/200'},
        {maPhim: 2, tenPhim: 'test 2', hinhAnh: 'https://picsum.photos/id/30/200/200'},
    ],
    chiTietPhim: {},
}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case 'SET_DATA_FILMS': {
            state.arrPhim = action.arrPhim;
            return {...state};
        }
        case 'SET_CHI_TIET_PHIM': {
            // let {maPhim} = action.chiTietPhim.maPhim;
            // let chiTietPhim = state.arrPhim.find(phim => phim.maPhim === maPhim);
            state.chiTietPhim = action.chiTietPhim;
            return {...state};
        }
        default: return state;
    }
}