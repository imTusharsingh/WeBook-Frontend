import {
    SEND_FRIEND_REQUEST,
    SEND_FRIEND_SUCCESS,
    SEND_FRIEND_FAILURE
} from "../../Types"

const initialValue = {
    loading: false,
    message: "",
    error: null
}

export const sendFriendRequestReducer = (state = initialValue, action) => {
    switch (action.type) {
        case SEND_FRIEND_REQUEST: return {
            ...state, loading: true, error: null
        }
        case SEND_FRIEND_SUCCESS: return {
            ...state, loading: false, error: null, message: action.payload
        }
        case SEND_FRIEND_FAILURE: return {
            ...state, loading: false, error: action.payload
        }
        default: return state
    }
}