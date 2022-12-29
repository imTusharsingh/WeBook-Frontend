import {
    DISLIKE_REQUEST,
    DISLIKE_SUCCESS,
    DISLIKE_FAILURE
} from "../../Types";

const initialValue = {
    loading: false,
    message: "",
    error: null
}

export const dislikeReducer = (state = initialValue, action) => {
    switch (action.type) {
        case DISLIKE_REQUEST: return {
            ...state, loading: true, error: null
        }
        case DISLIKE_SUCCESS: return {
            ...state, loading: false, error: null, message: action.payload
        }
        case DISLIKE_FAILURE: return {
            ...state, loading: false, error: action.payload
        }
        default: return state
    }
}