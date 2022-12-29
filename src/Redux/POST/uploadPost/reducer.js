import {
    UPLOAD_POST_REQUEST,
    UPLOAD_POST_SUCCESS,
    UPLOAD_POST_FAILURE
} from "../../Types";

const initialValue = {
    loading: false,
    error: null,
    message: ""
}

export const uploadPostReducer = (state = initialValue, action) => {
    switch (action.type) {
        case UPLOAD_POST_REQUEST: return {
            ...state, loading: true, error: null
        }
        case UPLOAD_POST_SUCCESS: return {
            ...state, loading: false, error: null, message: action.payload
        }
        case UPLOAD_POST_FAILURE: return {
            ...state, loading: false, message: "", error: action.payload
        }

        default: return state
    }
}