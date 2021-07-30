import {ADD_COMMENT} from './type/FaceBookAppType'

export const addCommentAction = (userComment) => {
    return {
        type: ADD_COMMENT,
        userComment: userComment
    }
}