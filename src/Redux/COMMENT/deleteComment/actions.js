import {
    DELETE_COMMENT_REQUEST,
    DELETE_COMMENT_SUCCESS,
    DELETE_COMMENT_FAILURE
} from "../../Types";

export const deleteCommentRequest = (data) => {
    return {
        type: DELETE_COMMENT_REQUEST,
        payload: data
    }
}
export const deleteCommentSuccess = (message) => {
    return {
        type: DELETE_COMMENT_SUCCESS,
        payload: message
    }
}
export const deleteCommentFailure = (error) => {
    return {
        type: DELETE_COMMENT_FAILURE,
        payload: error
    }
}