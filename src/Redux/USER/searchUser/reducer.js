import {
    SEARCH_USER_REQUEST,
    SEARCH_USER_SUCCESS,
    SEARCH_USER_FAILURE
} from "../../Types";

const initialValue = {
    loading: false,
    data: {},
    error: null
}

export const searchUserReducer = (state = initialValue, action) => {
    switch (action.type) {
        case SEARCH_USER_REQUEST: return {
            ...state, loading: true, error: null
        }
        case SEARCH_USER_SUCCESS: return {
            ...state, data: action.payload, loading: false, error: null
        }
        case SEARCH_USER_FAILURE: return {
            ...state, loading: false, error: action.payload,
        }

        default: return state
    }
}