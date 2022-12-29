import {
    REJECT_FRIEND_REQUEST_REQUEST,
    REJECT_FRIEND_REQUEST_SUCCESS,
    REJECT_FRIEND_REQUEST_FAILURE
} from "../../Types"

const initialValue = {
    loading: false,
    message: "",
    error: null
}

export const rejectFriendRequestReducer = (state = initialValue, action) => {
    switch (action.type) {
        case REJECT_FRIEND_REQUEST_REQUEST: return {
            ...state, loading: true, error: null
        }
        case REJECT_FRIEND_REQUEST_SUCCESS: return {
            ...state, loading: false, error: null, message: action.payload
        }
        case REJECT_FRIEND_REQUEST_FAILURE: return {
            ...state, loading: false, error: action.payload
        }
        default: return state
    }
}