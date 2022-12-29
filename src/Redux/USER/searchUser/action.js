import { SEARCH_USER_FAILURE, SEARCH_USER_REQUEST, SEARCH_USER_SUCCESS } from "../../Types"

export const searchUserRequest = (data) => {
    return {
        type: SEARCH_USER_REQUEST,
        payload: data
    }
}

export const searchUserSuccess = (data) => {
    return {
        type: SEARCH_USER_SUCCESS,
        payload: data
    }
}

export const searchUserFailure = (error) => {
    return {
        type: SEARCH_USER_FAILURE,
        payload: error
    }
}