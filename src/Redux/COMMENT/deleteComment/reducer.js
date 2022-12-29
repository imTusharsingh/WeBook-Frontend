import {
    DELETE_COMMENT_REQUEST,
    DELETE_COMMENT_SUCCESS,
    DELETE_COMMENT_FAILURE
} from "../../Types";

const initialValue = {
    loading: false,
    message: "",
    error: null
}

export const deleteCommentReducer = (state = initialValue, action) => {
    switch (action.type) {
        case DELETE_COMMENT_REQUEST: return {
            ...state, loading: true, error: null
        }
        case DELETE_COMMENT_SUCCESS: return {
            ...state, loading: false, error: null, message: action.payload
        }
        case DELETE_COMMENT_FAILURE: return {
            ...state, loading: false, error: action.payload
        }
        default: return state
    }
}