import {
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAILURE
} from "../../Types";

export const addCommentRequest = (data) => {
    return {
        type: ADD_COMMENT_REQUEST,
        payload: data
    }
}
export const addCommentSuccess = (message) => {
    return {
        type: ADD_COMMENT_SUCCESS,
        payload: message
    }
}
export const addCommentFailure = (error) => {
    return {
        type: ADD_COMMENT_FAILURE,
        payload: error
    }
}