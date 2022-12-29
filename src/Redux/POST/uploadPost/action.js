import {
    UPLOAD_POST_REQUEST,
    UPLOAD_POST_SUCCESS,
    UPLOAD_POST_FAILURE
} from "../../Types";


export const uploadPostRequest = (data) => {
    return {
        type: UPLOAD_POST_REQUEST,
        payload: data
    }
}

export const uploadPostSuccess = (message) => {
    return {
        type: UPLOAD_POST_SUCCESS,
        payload: message
    }
}

export const uploadPostFailure = (error) => {
    return {
        type: UPLOAD_POST_FAILURE,
        payload: error
    }
}