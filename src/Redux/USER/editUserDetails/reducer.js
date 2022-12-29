import {
    EDIT_USER_REQUEST,
    EDIT_USER_SUCCESS,
    EDIT_USER_FAILURE
} from "../../Types";

const initialValue = {
    loading: false,
    error: null
}

export const editUserReducer = (state = initialValue, action) => {
    switch (action.type) {
        case EDIT_USER_REQUEST: return {
            ...state, loading: true, error: null
        }
        case EDIT_USER_SUCCESS: return {
            ...state, loading: false, error: null
        }
        case EDIT_USER_FAILURE: return {
            ...state, loading: false, error: action.payload
        }

        default: return state
    }
}