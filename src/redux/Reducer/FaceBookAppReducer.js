import { ADD_COMMENT } from "../action/type/FaceBookAppType";

const stateDefault = {
    arrComment: [
        {name: 'Nguyen Van A', content: 'A hihi', img: 'https://picsum.photos/id/20/50/50'},
        {name: 'Nguyen Van B', content: 'Xin chào', img: 'https://picsum.photos/id/30/50/50'},
    ]
}

export const FaceBookAppReducer = (state = stateDefault, action) => {
    
    
    switch(action.type) {

        case ADD_COMMENT: {
            state.arrComment = [...state.arrComment, action.userComment]
            // console.log('hehe')
            return{...state};
        }
        break;
        
        default: return state;
    }
}