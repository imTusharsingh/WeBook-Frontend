import {
    DELETE_POST_REQUEST,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAILURE
} from "../../Types";

const initialValue = {
    loading: false,
    error: null,
    message: ""
}

export const deletePostReducer = (state = initialValue, action) => {
    switch (action.type) {
        case DELETE_POST_REQUEST: return {
            ...state, loading: true, error: null
        }
        case DELETE_POST_SUCCESS: return {
            ...state, loading: false, error: null, message: action.payload
        }
        case DELETE_POST_FAILURE: return {
            ...state, loading: false, message: "", error: action.payload
        }

        default: return state
    }
}