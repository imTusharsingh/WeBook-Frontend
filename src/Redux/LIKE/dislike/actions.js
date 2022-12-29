import {
    DISLIKE_REQUEST,
    DISLIKE_SUCCESS,
    DISLIKE_FAILURE
} from "../../Types";

export const dislikeRequest = (id) => {
    return {
        type: DISLIKE_REQUEST,
        payload: id
    }
}
export const dislikeSuccess = (message) => {
    return {
        type: DISLIKE_SUCCESS,
        payload: message
    }
}
export const dislikeFailure = (error) => {
    return {
        type: DISLIKE_FAILURE,
        payload: error
    }
}