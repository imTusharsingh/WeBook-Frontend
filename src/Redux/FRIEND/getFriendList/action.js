import {
    GET_FRIENDS_LIST_REQUEST,
    GET_FRIENDS_LIST_SUCCESS,
    GET_FRIENDS_LIST_FAILURE
} from "../../Types"

export const getFriendsListRequest = () => {
    return {
        type: GET_FRIENDS_LIST_REQUEST
    }
}
export const getFriendsListSuccess = (friends) => {
    return {
        type: GET_FRIENDS_LIST_SUCCESS,
        payload: friends
    }
}
export const getFriendsListFailure = (error) => {
    return {
        type: GET_FRIENDS_LIST_FAILURE,
        payload: error
    }
}