import {
    GET_REQUEST_LIST_REQUEST,
    GET_REQUEST_LIST_SUCCESS,
    GET_REQUEST_LIST_FAILURE
} from "../../Types"

export const getRequestListRequest = () => {
    return {
        type: GET_REQUEST_LIST_REQUEST
    }
}
export const getRequestListSuccess = (message) => {
    return {
        type: GET_REQUEST_LIST_SUCCESS,
        payload: message
    }
}
export const getRequestListFailure = (error) => {
    return {
        type: GET_REQUEST_LIST_FAILURE,
        payload: error
    }
}