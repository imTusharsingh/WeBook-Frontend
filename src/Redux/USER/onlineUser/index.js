import { ADD_ONLINE_USER } from "../../Types"

export const addOnlineUser = (data) => {
    return {
        type: ADD_ONLINE_USER,
        payload: data
    }
}



const initialValue = {
    onlineUsers: [],
}


export const onlineUserReducer = (state = initialValue, action) => {
    switch (action.type) {
        case ADD_ONLINE_USER: return {
            ...state, onlineUsers: action.payload
        }
        default: return state
    }
}