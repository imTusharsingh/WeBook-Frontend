import { EDIT_USER_FAILURE, EDIT_USER_REQUEST, EDIT_USER_SUCCESS } from "../../Types"

export const editUserRequest = (data) => {
    return {
        type: EDIT_USER_REQUEST,
        payload: data
    }
}

export const editUserSuccess = () => {
    return {
        type: EDIT_USER_SUCCESS
    }
}

export const editUserFailure = (error) => {
    return {
        type: EDIT_USER_FAILURE,
        payload: error
    }
}