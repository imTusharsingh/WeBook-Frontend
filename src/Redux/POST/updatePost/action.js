import {
    UPDATE_POST_REQUEST,
    UPDATE_POST_SUCCESS,
    UPDATE_POST_FAILURE
} from "../../Types";


export const updatePostRequest = (data) => {
    return {
        type: UPDATE_POST_REQUEST,
        payload: data
    }
}

export const updatePostSuccess = (message) => {
    return {
        type: UPDATE_POST_SUCCESS,
        payload: message
    }
}

export const updatePostFailure = (error) => {
    return {
        type: UPDATE_POST_FAILURE,
        payload: error
    }
}