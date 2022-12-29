import {
    SEND_FRIEND_REQUEST,
    SEND_FRIEND_SUCCESS,
    SEND_FRIEND_FAILURE
} from "../../Types"

export const sendFriendRequest = (id) => {
    return {
        type: SEND_FRIEND_REQUEST,
        payload: id
    }
}
export const sendFriendSuccess = (message) => {
    return {
        type: SEND_FRIEND_SUCCESS,
        payload: message
    }
}
export const sendFriendFailure = (error) => {
    return {
        type: SEND_FRIEND_FAILURE,
        payload: error
    }
}