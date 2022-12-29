import {
    CREATE_CONVERSATION_REQUEST,
    CREATE_CONVERSATION_SUCCESS,
    CREATE_CONVERSATION_FAILURE
} from "../../Types"

export const createConversationRequest = (data) => {
    return {
        type: CREATE_CONVERSATION_REQUEST,
        payload: data
    }
}
export const createConversationSuccess = (message) => {
    return {
        type: CREATE_CONVERSATION_SUCCESS,
        payload: message
    }
}
export const createConversationFailure = (error) => {
    return {
        type: CREATE_CONVERSATION_FAILURE,
        payload: error
    }
}