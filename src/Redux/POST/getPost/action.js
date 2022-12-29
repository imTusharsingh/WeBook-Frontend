import {
    GET_POST_REQUEST,
    GET_POST_SUCCESS,
    GET_POST_FAILURE
} from "../../Types";


export const getPostRequest = (id) => {
    return {
        type: GET_POST_REQUEST,
        payload: id
    }
}

export const getPostSuccess = (posts) => {
    return {
        type: GET_POST_SUCCESS,
        payload: posts
    }
}

export const getPostFailure = (error) => {
    return {
        type: GET_POST_FAILURE,
        payload: error
    }
}