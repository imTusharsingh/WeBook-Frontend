import {
    GET_CONVERSATION_REQUEST,
    GET_CONVERSATION_SUCCESS,
    GET_CONVERSATION_FAILURE
} from "../../Types";

const initialValue = {
    loading: false,
    data: [],
    error: null
}

export const getConversationReducer = (state = initialValue, action) => {
    switch (action.type) {
        case GET_CONVERSATION_REQUEST: return {
            ...state, loading: true, error: null
        }
        case GET_CONVERSATION_SUCCESS: return {
            ...state, loading: false, error: null, data: action.payload
        }
        case GET_CONVERSATION_FAILURE: return {
            ...state, loading: false, error: action.payload
        }
        default: return state
    }
}