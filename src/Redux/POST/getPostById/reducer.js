import {
    GET_POST_BY_ID_REQUEST,
    GET_POST_BY_ID_SUCCESS,
    GET_POST_BY_ID_FAILURE
} from "../../Types";

const initialValue = {
    loading: false,
    error: null,
    post: {}
}

export const getPostByIdReducer = (state = initialValue, action) => {
    switch (action.type) {
        case GET_POST_BY_ID_REQUEST: return {
            ...state, loading: true, error: null
        }
        case GET_POST_BY_ID_SUCCESS: return {
            ...state, loading: false, error: null, post: action.payload
        }
        case GET_POST_BY_ID_FAILURE: return {
            ...state, loading: false, error: action.payload
        }

        default: return state
    }
}