import {
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE
} from "../../Types";

const initialValue = {
    loading: false,
    data: {},
    error: null
}

export const userDetailsReducer = (state = initialValue, action) => {
    switch (action.type) {
        case GET_USER_REQUEST: return {
            ...state, loading: true, error: null
        }
        case GET_USER_SUCCESS: return {
            ...state, data: action.payload, loading: false, error: null
        }
        case GET_USER_FAILURE: return {
            ...state, loading: false, error: action.payload
        }

        default: return state
    }
}