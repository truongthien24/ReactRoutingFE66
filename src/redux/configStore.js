import {applyMiddleware, combineReducers, createStore} from 'redux';
import {FaceBookAppReducer}  from './Reducer/FaceBookAppReducer';
import {QuanLyPhimReducer} from './Reducer/QuanLyPhimReducer';
import {ModalReducer} from './Reducer/ModalReducer'
import reduxThunk from 'redux-thunk'
import { QuanLyNguoiDungReducer } from './Reducer/QuanLyNguoiDungReducer';

const rootReducer = combineReducers({
    FaceBookAppReducer: FaceBookAppReducer,
    QuanLyPhimReducer: QuanLyPhimReducer,
    ModalReducer: ModalReducer,
    QuanLyNguoiDungReducer: QuanLyNguoiDungReducer
});


export const store = createStore(rootReducer, applyMiddleware(reduxThunk))

// ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
