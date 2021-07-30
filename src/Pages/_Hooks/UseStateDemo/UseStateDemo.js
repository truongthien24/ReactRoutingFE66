import React, {useState} from 'react'
import BaiTapChonXe from './BaiTapChonXe';

export default function UseStateDemo(props) {
    
    let [state,setState] = useState({like: 1});

    const handleLike = () => {
        setState({
            like: state.like + 1
        });
    }

    return (
        <div className="container">
            <h3>Demo Use State</h3>
            <div className="card" style={{height: '400px', width:'300px'}}>
                <img src="https://picsum.photos/id/55/200/200" alt="..."></img>
                <div className="card-body">
                    <p>{state.like} like</p>
                    <button onClick={handleLike}>Like</button>
                </div>
            </div>
            <hr/>
            <BaiTapChonXe/>
        </div>
    )
}
