import {
    REMOVE_FRIEND_REQUEST_REQUEST,
    REMOVE_FRIEND_REQUEST_SUCCESS,
    REMOVE_FRIEND_REQUEST_FAILURE
} from "../../Types"

export const removeFriendRequestRequest = (id) => {
    return {
        type: REMOVE_FRIEND_REQUEST_REQUEST,
        payload: id
    }
}
export const removeFriendRequestSuccess = (message) => {
    return {
        type: REMOVE_FRIEND_REQUEST_SUCCESS,
        payload: message
    }
}
export const removeFriendRequestFailure = (error) => {
    return {
        type: REMOVE_FRIEND_REQUEST_FAILURE,
        payload: error
    }
}