import { REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../../Types"

export const registerUserRequest = (data) => {
    return {
        type: REGISTER_USER_REQUEST,
        payload: data
    }
}

export const registerUserSuccess = () => {
    return {
        type: REGISTER_USER_SUCCESS
    }
}

export const registerUserFailure = (error) => {
    return {
        type: REGISTER_USER_FAILURE,
        payload: error
    }
}