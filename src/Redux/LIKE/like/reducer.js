import {
    LIKE_REQUEST,
    LIKE_SUCCESS,
    LIKE_FAILURE
} from "../../Types";

const initialValue = {
    loading: false,
    message: "",
    error: null
}

export const likeReducer = (state = initialValue, action) => {
    switch (action.type) {
        case LIKE_REQUEST: return {
            ...state, loading: true, error: null
        }
        case LIKE_SUCCESS: return {
            ...state, loading: false, error: null, message: action.payload
        }
        case LIKE_FAILURE: return {
            ...state, loading: false, error: action.payload
        }
        default: return state
    }
}