import {
    REMOVE_FRIEND_REQUEST_REQUEST,
    REMOVE_FRIEND_REQUEST_SUCCESS,
    REMOVE_FRIEND_REQUEST_FAILURE
} from "../../Types"

const initialValue = {
    loading: false,
    message: "",
    error: null
}

export const removeFriendRequestReducer = (state = initialValue, action) => {
    switch (action.type) {
        case REMOVE_FRIEND_REQUEST_REQUEST: return {
            ...state, loading: true, error: null
        }
        case REMOVE_FRIEND_REQUEST_SUCCESS: return {
            ...state, loading: false, error: null, message: action.payload
        }
        case REMOVE_FRIEND_REQUEST_FAILURE: return {
            ...state, loading: false, error: action.payload
        }
        default: return state
    }
}