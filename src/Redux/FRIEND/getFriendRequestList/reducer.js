import {
    GET_REQUEST_LIST_REQUEST,
    GET_REQUEST_LIST_SUCCESS,
    GET_REQUEST_LIST_FAILURE
} from "../../Types"

const initialValue = {
    loading: false,
    friendRequests: [],
    error: null
}

export const getRequestListReducer = (state = initialValue, action) => {
    switch (action.type) {
        case GET_REQUEST_LIST_REQUEST: return {
            ...state, loading: true, error: null
        }
        case GET_REQUEST_LIST_SUCCESS: return {
            ...state, loading: false, error: null, friendRequests: action.payload
        }
        case GET_REQUEST_LIST_FAILURE: return {
            ...state, loading: false, error: action.payload
        }
        default: return state
    }
}