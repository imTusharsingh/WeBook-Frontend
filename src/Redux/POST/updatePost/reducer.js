import {
    UPDATE_POST_REQUEST,
    UPDATE_POST_SUCCESS,
    UPDATE_POST_FAILURE
} from "../../Types";

const initialValue = {
    loading: false,
    error: null,
    message: ""
}

export const updatePostReducer = (state = initialValue, action) => {
    switch (action.type) {
        case UPDATE_POST_REQUEST: return {
            ...state, loading: true, error: null
        }
        case UPDATE_POST_SUCCESS: return {
            ...state, loading: false, error: null, message: action.payload
        }
        case UPDATE_POST_FAILURE: return {
            ...state, loading: false, message: "", error: action.payload
        }

        default: return state
    }
}