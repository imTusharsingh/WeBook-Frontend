import {
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAILURE
} from "../../Types";

const initialValue = {
    loading: false,
    message: "",
    error: null
}

export const addCommentReducer = (state = initialValue, action) => {
    switch (action.type) {
        case ADD_COMMENT_REQUEST: return {
            ...state, loading: true, error: null
        }
        case ADD_COMMENT_SUCCESS: return {
            ...state, loading: false, error: null, message: action.payload
        }
        case ADD_COMMENT_FAILURE: return {
            ...state, loading: false, error: action.payload
        }
        default: return state
    }
}

