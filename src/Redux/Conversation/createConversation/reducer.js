import {
    CREATE_CONVERSATION_REQUEST,
    CREATE_CONVERSATION_SUCCESS,
    CREATE_CONVERSATION_FAILURE
} from "../../Types";

const initialValue = {
    loading: false,
    message: "",
    error: null
}

export const createConversationReducer = (state = initialValue, action) => {
    switch (action.type) {
        case CREATE_CONVERSATION_REQUEST: return {
            ...state, loading: true, error: null, message: ""
        }
        case CREATE_CONVERSATION_SUCCESS: return {
            ...state, loading: false, error: null, message: action.payload
        }
        case CREATE_CONVERSATION_FAILURE: return {
            ...state, loading: false, error: action.payload, message: ""
        }
        default: return state
    }
}