import {
    EDIT_COMMENT_REQUEST,
    EDIT_COMMENT_SUCCESS,
    EDIT_COMMENT_FAILURE
} from "../../Types";

const initialValue = {
    loading: false,
    message: "",
    error: null
}

export const editCommentReducer = (state = initialValue, action) => {
    switch (action.type) {
        case EDIT_COMMENT_REQUEST: return {
            ...state, loading: true, error: null
        }
        case EDIT_COMMENT_SUCCESS: return {
            ...state, loading: false, error: null, message: action.payload
        }
        case EDIT_COMMENT_FAILURE: return {
            ...state, loading: false, error: action.payload
        }
        default: return state
    }
}