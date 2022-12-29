import {
    EDIT_COMMENT_REQUEST,
    EDIT_COMMENT_SUCCESS,
    EDIT_COMMENT_FAILURE
} from "../../Types";

export const editCommentRequest = (data) => {
    return {
        type: EDIT_COMMENT_REQUEST,
        payload: data
    }
}
export const editCommentSuccess = (message) => {
    return {
        type: EDIT_COMMENT_SUCCESS,
        payload: message
    }
}
export const editCommentFailure = (error) => {
    return {
        type: EDIT_COMMENT_FAILURE,
        payload: error
    }
}