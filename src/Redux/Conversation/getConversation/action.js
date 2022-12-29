import {
    GET_CONVERSATION_REQUEST,
    GET_CONVERSATION_SUCCESS,
    GET_CONVERSATION_FAILURE
} from "../../Types"

export const getConversationRequest = () => {
    return {
        type: GET_CONVERSATION_REQUEST
    }
}
export const getConversationSuccess = (message) => {
    return {
        type: GET_CONVERSATION_SUCCESS,
        payload: message
    }
}
export const getConversationFailure = (error) => {
    return {
        type: GET_CONVERSATION_FAILURE,
        payload: error
    }
}