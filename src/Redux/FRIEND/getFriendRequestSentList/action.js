import {
    GET_REQUEST_SENT_LIST_REQUEST,
    GET_REQUEST_SENT_LIST_SUCCESS,
    GET_REQUEST_SENT_LIST_FAILURE
} from "../../Types"

export const getRequestSentListRequest = () => {
    return {
        type: GET_REQUEST_SENT_LIST_REQUEST
    }
}
export const getRequestSentListSuccess = (requests) => {
    return {
        type: GET_REQUEST_SENT_LIST_SUCCESS,
        payload: requests
    }
}
export const getRequestSentListFailure = (error) => {
    return {
        type: GET_REQUEST_SENT_LIST_FAILURE,
        payload: error
    }
}