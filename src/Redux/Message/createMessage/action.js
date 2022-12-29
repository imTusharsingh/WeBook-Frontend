import {
    CREATE_MESSAGE_REQUEST,
    CREATE_MESSAGE_SUCCESS,
    CREATE_MESSAGE_FAILURE
} from "../../Types"

export const createMessageRequest = (data) => {
    return {
        type: CREATE_MESSAGE_REQUEST,
        payload: data
    }
}
export const createMessageSuccess = (message) => {
    return {
        type: CREATE_MESSAGE_SUCCESS,
        payload: message
    }
}
export const createMessageFailure = (error) => {
    return {
        type: CREATE_MESSAGE_FAILURE,
        payload: error
    }
}