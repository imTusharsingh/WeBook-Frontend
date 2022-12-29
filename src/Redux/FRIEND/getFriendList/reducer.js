import {
    GET_FRIENDS_LIST_REQUEST,
    GET_FRIENDS_LIST_SUCCESS,
    GET_FRIENDS_LIST_FAILURE
} from "../../Types"

const initialValue = {
    loading: false,
    friends: [],
    error: null
}

export const getfriendsListReducer = (state = initialValue, action) => {
    switch (action.type) {
        case GET_FRIENDS_LIST_REQUEST: return {
            ...state, loading: true, error: null
        }
        case GET_FRIENDS_LIST_SUCCESS: return {
            ...state, loading: false, error: null, friends: action.payload
        }
        case GET_FRIENDS_LIST_FAILURE: return {
            ...state, loading: false, error: action.payload
        }
        default: return state
    }
}