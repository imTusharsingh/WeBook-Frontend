import {
    DELETE_POST_REQUEST,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAILURE
} from "../../Types";


export const deletePostRequest = (id) => {
    return {
        type: DELETE_POST_REQUEST,
        payload: id
    }
}

export const deletePostSuccess = (message) => {
    return {
        type: DELETE_POST_SUCCESS,
        payload: message
    }
}

export const deletePostFailure = (error) => {
    return {
        type: DELETE_POST_FAILURE,
        payload: error
    }
}