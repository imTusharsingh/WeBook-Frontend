import {
    GET_FRIENDS_POST_REQUEST,
    GET_FRIENDS_POST_SUCCESS,
    GET_FRIENDS_POST_FAILURE
} from "../../Types";

const initialValue = {
    loading: false,
    error: null,
    posts: []
}

export const getFriendsPostReducer = (state = initialValue, action) => {
    switch (action.type) {
        case GET_FRIENDS_POST_REQUEST: return {
            ...state, loading: true, error: null
        }
        case GET_FRIENDS_POST_SUCCESS: return {
            ...state, loading: false, error: null, posts: action.payload
        }
        case GET_FRIENDS_POST_FAILURE: return {
            ...state, loading: false, error: action.payload
        }

        default: return state
    }
}