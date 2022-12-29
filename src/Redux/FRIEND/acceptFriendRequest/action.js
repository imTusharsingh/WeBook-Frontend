import {
    ACCEPT_FRIEND_REQUEST_REQUEST,
    ACCEPT_FRIEND_REQUEST_SUCCESS,
    ACCEPT_FRIEND_REQUEST_FAILURE
} from "../../Types"

export const acceptFriendRequest = (id) => {
    return {
        type: ACCEPT_FRIEND_REQUEST_REQUEST,
        payload: id
    }
}
export const acceptFriendSuccess = (message) => {
    return {
        type: ACCEPT_FRIEND_REQUEST_SUCCESS,
        payload: message
    }
}
export const acceptFriendFailure = (error) => {
    return {
        type: ACCEPT_FRIEND_REQUEST_FAILURE,
        payload: error
    }
}