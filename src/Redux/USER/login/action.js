import { LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS } from "../../Types"

export const loginUserRequest = (data) => {
    return {
        type: LOGIN_USER_REQUEST,
        payload: data
    }
}

export const loginUserSuccess = (data) => {
    return {
        type: LOGIN_USER_SUCCESS,
        payload: data
    }
}

export const loginUserFailure = (error) => {
    return {
        type: LOGIN_USER_FAILURE,
        payload: error
    }
}