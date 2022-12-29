import {
    GET_POST_REQUEST,
    GET_POST_SUCCESS,
    GET_POST_FAILURE
} from "../../Types";


const initialValue = {
    loading: false,
    error: null,
    posts: []
}

export const getPostReducer = (state = initialValue, action) => {
    switch (action.type) {
        case GET_POST_REQUEST: return {
            ...state, loading: true, error: null
        }
        case GET_POST_SUCCESS: return {
            ...state, loading: false, error: null, posts: action.payload
        }
        case GET_POST_FAILURE: return {
            ...state, loading: false, error: action.payload
        }

        default: return state
    }
}