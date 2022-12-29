import {
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
} from "../../Types";

const initialValue = {
    loading: false,
    data: {},
    error: null
}

export const loginReducer = (state = initialValue, action) => {
    switch (action.type) {
        case LOGIN_USER_REQUEST: return {
            ...state, loading: true, error: null, data: {}
        }
        case LOGIN_USER_SUCCESS: {
            return {
                ...state, data: action.payload, loading: false, error: null
            }
        }
        case LOGIN_USER_FAILURE: return {
            ...state, loading: false, error: action.payload, data: {}
        }

        default: return state
    }
}