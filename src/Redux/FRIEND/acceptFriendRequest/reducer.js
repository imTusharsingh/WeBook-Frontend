import {
    ACCEPT_FRIEND_REQUEST_REQUEST,
    ACCEPT_FRIEND_REQUEST_SUCCESS,
    ACCEPT_FRIEND_REQUEST_FAILURE
} from "../../Types"

const initialValue = {
    loading: false,
    message: "",
    error: null
}

export const acceptFriendRequestReducer = (state = initialValue, action) => {
    switch (action.type) {
        case ACCEPT_FRIEND_REQUEST_REQUEST: return {
            ...state, loading: true, error: null
        }
        case ACCEPT_FRIEND_REQUEST_SUCCESS: return {
            ...state, loading: false, error: null, message: action.payload
        }
        case ACCEPT_FRIEND_REQUEST_FAILURE: return {
            ...state, loading: false, error: action.payload
        }
        default: return state
    }
}