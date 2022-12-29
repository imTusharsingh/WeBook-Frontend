import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
} from "../../Types";

const initialValue = {
    loading: false,
    error: "",
    message: ""
}

export const registrationReducer = (state = initialValue, action) => {
    switch (action.type) {
        case REGISTER_USER_REQUEST: return {
            loading: true, error: "", message: ""
        }
        case REGISTER_USER_SUCCESS: return {
            loading: false, error: "", message: "registration Successfull"
        }
        case REGISTER_USER_FAILURE: return {
            loading: false, error: action.payload, message: ""
        }

        default: return state
    }
}