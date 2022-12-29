import {
    LIKE_REQUEST,
    LIKE_SUCCESS,
    LIKE_FAILURE
} from "../../Types";

export const likeRequest = (id) => {
    return {
        type: LIKE_REQUEST,
        payload: id
    }
}
export const likeSuccess = (message) => {
    return {
        type: LIKE_SUCCESS,
        payload: message
    }
}
export const likeFailure = (error) => {
    return {
        type: LIKE_FAILURE,
        payload: error
    }
}