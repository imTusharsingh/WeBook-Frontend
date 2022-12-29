import {
    GET_POST_BY_ID_REQUEST,
    GET_POST_BY_ID_SUCCESS,
    GET_POST_BY_ID_FAILURE
} from "../../Types";


export const getPostByIdRequest = (id) => {
    return {
        type: GET_POST_BY_ID_REQUEST,
        payload: id
    }
}

export const getPostByIdSuccess = (post) => {
    return {
        type: GET_POST_BY_ID_SUCCESS,
        payload: post
    }
}

export const getPostByIdFailure = (error) => {
    return {
        type: GET_POST_BY_ID_FAILURE,
        payload: error
    }
}