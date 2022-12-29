import {
    REMOVE_FRIEND_REQUEST,
    REMOVE_FRIEND_SUCCESS,
    REMOVE_FRIEND_FAILURE
} from "../../Types"

export const removeFriendRequest = (id) => {
    return {
        type: REMOVE_FRIEND_REQUEST,
        payload: id
    }
}
export const removeFriendSuccess = (message) => {
    return {
        type: REMOVE_FRIEND_SUCCESS,
        payload: message
    }
}
export const removeFriendFailure = (error) => {
    return {
        type: REMOVE_FRIEND_FAILURE,
        payload: error
    }
}