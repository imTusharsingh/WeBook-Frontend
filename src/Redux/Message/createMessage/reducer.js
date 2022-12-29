import {
    CREATE_MESSAGE_REQUEST,
    CREATE_MESSAGE_SUCCESS,
    CREATE_MESSAGE_FAILURE
} from "../../Types";

const initialValue = {
    loading: false,
    message: "",
    error: null
}

export const createMessageReducer = (state = initialValue, action) => {
    switch (action.type) {
        case CREATE_MESSAGE_REQUEST: return {
            ...state, loading: true, error: null
        }
        case CREATE_MESSAGE_SUCCESS: return {
            ...state, loading: false, error: null, message: action.payload
        }
        case CREATE_MESSAGE_FAILURE: return {
            ...state, loading: false, error: action.payload, message: ""
        }
        default: return state
    }
}