import {
    GET_MESSAGE_REQUEST,
    GET_MESSAGE_SUCCESS,
    GET_MESSAGE_FAILURE,
    ADD_ARRIVAL_MESSAGE
} from "../../Types";

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'persist-key2',
    storage
}

const initialValue = {
    loading: false,
    data: [],
    error: null
}

const getMessageReducer = (state = initialValue, action) => {
    switch (action.type) {
        case GET_MESSAGE_REQUEST: return {
            ...state, loading: true, error: null
        }
        case GET_MESSAGE_SUCCESS: return {
            ...state, loading: false, error: null, data: action.payload
        }
        case ADD_ARRIVAL_MESSAGE: return {
            ...state, loading: false, error: null, data: [...state.data, action.payload]
        }
        case GET_MESSAGE_FAILURE: return {
            ...state, loading: false, error: action.payload
        }
        default: return state
    }
}

export const persistMessageReducer = persistReducer(persistConfig, getMessageReducer)