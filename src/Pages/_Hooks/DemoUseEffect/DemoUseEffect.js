import React, {useEffect,useState} from 'react'

export default function DemoUseEffect(props) {
    
    let [number, setNumber] = useState(1);
    let [like, setLike] = useState(1);

    useEffect(() => {
        //Hạn chế setState tại đây
        console.log('Thay thế cho lifecycle là componentDidMount');
        //Thường dùng để call api
        return () => {
            //Nội dung khi component này hủy thì sẽ thực thi hàm này 
            //Tương tự component willUnmount
            console.log('Xóa rồi nhé !');
        }
    },[])

    useEffect(() => {
        console.log('useeffect thay thế cho lifecycle là componentDidUpdate');
        //Thường dùng để call api
    },[like]) //Khi state like thay đổi giá trị bởi hàm setLike => thì useeffect này sẽ chạy lại (so sánh kiểu cơ sở)
    
    return (
        <div className="container">
            useEffect
            <h3>Number: {number}</h3>
            <h3>Like : {like}</h3>

            <button className="btn btn-success" onClick={()=>{
                setNumber(number+1)
            }}>+</button>

            <br/>
            <button className="btn btn-success" onClick={()=> {
                setLike(like +1)
            }}>Like</button>
        </div>
    )
}
