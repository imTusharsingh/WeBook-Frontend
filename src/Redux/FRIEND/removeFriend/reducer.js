import {
    REMOVE_FRIEND_REQUEST,
    REMOVE_FRIEND_SUCCESS,
    REMOVE_FRIEND_FAILURE
} from "../../Types"

const initialValue = {
    loading: false,
    message: "",
    error: null
}

export const removeFriendReducer = (state = initialValue, action) => {
    switch (action.type) {
        case REMOVE_FRIEND_REQUEST: return {
            ...state, loading: true, error: null
        }
        case REMOVE_FRIEND_SUCCESS: return {
            ...state, loading: false, error: null, message: action.payload
        }
        case REMOVE_FRIEND_FAILURE: return {
            ...state, loading: false, error: action.payload
        }
        default: return state
    }
}