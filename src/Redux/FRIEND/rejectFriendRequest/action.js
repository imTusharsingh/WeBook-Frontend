import {
    REJECT_FRIEND_REQUEST_REQUEST,
    REJECT_FRIEND_REQUEST_SUCCESS,
    REJECT_FRIEND_REQUEST_FAILURE
} from "../../Types"

export const rejectFriendRequest = (id) => {
    return {
        type: REJECT_FRIEND_REQUEST_REQUEST,
        payload: id
    }
}
export const rejectFriendSuccess = (message) => {
    return {
        type: REJECT_FRIEND_REQUEST_SUCCESS,
        payload: message
    }
}
export const rejectFriendFailure = (error) => {
    return {
        type: REJECT_FRIEND_REQUEST_FAILURE,
        payload: error
    }
}