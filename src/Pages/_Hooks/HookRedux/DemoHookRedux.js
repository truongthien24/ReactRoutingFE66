import React, {useState} from 'react'
import { connect, useSelector, useDispatch} from 'react-redux'
import { addCommentAction } from '../../../redux/action/FaceBookAppAction';

export default function DemoHookRedux(props) {

    const [state, setState] = useState({
        name: '',
        content: ''
    })

    //useSelector tương tự MapStateToProps
    const { arrComment } = useSelector(state => state.FaceBookAppReducer)

    //useDispatch ứng với this.props.dispatch bên react class
    const dispatch = useDispatch();

    const renderComment = () => {
        return arrComment.map((item, index) => {
            return <tr className="bg-dark text-white" key={index}>
                <td width="10%">
                    <img style={{ width: '50px', height: '50px' }} src={item.img}></img>
                </td>
                <td>
                    <h3>{item.name}</h3>
                    <p>{item.content}</p>
                </td>
            </tr>
        })
    }

    console.log('state', state)
    const handleChange = (event) => {
        let {value,name} = event.target;

        setState({
            ...state,
            [name]: value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //Lấy giá trị từ state và gọi redux

        // const action = {
        //     type: 'ADD_COMMENT',
        //     userComment: {...state, img: 'https://picsum.photos/id/20/200/300'}
        // }

        let userComment = {...state, img: 'https://picsum.photos/id/20/200/300'};
        const action = addCommentAction(userComment);
        dispatch(action);

        //dispatch(addCommentAction(userComment));
    }

    console.log(arrComment)
    return (
        <form className="container" onSubmit={handleSubmit}>
            <h3>Facebook app</h3>

            <table className="table">
                <tbody>
                    {renderComment()}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2">
                            <p>Name</p>
                            <input className="form-control" name="name"  onChange={handleChange}></input>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <p>Content</p>
                            <input className="form-control" name="content"  onChange={handleChange}></input>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button className="btn btn-success">Send</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </form>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         arrComment: state.FaceBookAppReducer.arrComment
//     }
// }


// export default connect(mapStateToProps)(DemoHookRedux)