import {
    GET_MESSAGE_REQUEST,
    GET_MESSAGE_SUCCESS,
    GET_MESSAGE_FAILURE,
    ADD_ARRIVAL_MESSAGE
} from "../../Types"

export const getMessageRequest = (data) => {
    return {
        type: GET_MESSAGE_REQUEST,
        payload: data
    }
}
export const getMessageSuccess = (message) => {
    return {
        type: GET_MESSAGE_SUCCESS,
        payload: message
    }
}
export const addArrivalMessage = (message) => {
    return {
        type: ADD_ARRIVAL_MESSAGE,
        payload: message
    }
}
export const getMessageFailure = (error) => {
    return {
        type: GET_MESSAGE_FAILURE,
        payload: error
    }
}