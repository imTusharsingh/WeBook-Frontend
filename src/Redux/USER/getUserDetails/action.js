import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from "../../Types"

export const getUserRequest = (id) => {
    return {
        type: GET_USER_REQUEST,
        payload: id
    }
}

export const getUserSuccess = (data) => {
    return {
        type: GET_USER_SUCCESS,
        payload: data
    }
}

export const getUserFailure = (error) => {
    return {
        type: GET_USER_FAILURE,
        payload: error
    }
}