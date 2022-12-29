import { AUTH_USER, AUTH_USER_FAILURE } from "../Types";

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'persist-key',
    storage
}


//actions

export const setAuthUser = (data) => {
    return {
        type: AUTH_USER,
        payload: data
    }
}

export const authUserError = (error) => {
    return {
        type: AUTH_USER_FAILURE,
        payload: error
    }
}


const initialState = {
    data: "",
    error: null
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USER: {
            return {
                ...state, data: action.payload, error: null
            }
        }
        case AUTH_USER_FAILURE: {
            return {
                ...state, error: action.payload, data: ""
            }
        }

        default: return state;
    }

}

export const persistreducer = persistReducer(persistConfig, authReducer)