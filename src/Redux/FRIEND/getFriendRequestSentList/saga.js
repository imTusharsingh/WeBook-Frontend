import { put, call, takeLatest, select } from "redux-saga/effects"

import { getFriendRequestSentList } from "../../Api/friendApi"

import { getRequestSentListSuccess, getRequestSentListFailure } from "./action"

import { GET_REQUEST_SENT_LIST_REQUEST } from "../../Types"

function* request(action) {
    try {
        const state = yield select();
        const token = state.auth.data.token
        const sentRequests = yield call(getFriendRequestSentList, token, action.payload)
        yield put(getRequestSentListSuccess(sentRequests))
    } catch (error) {
        yield put(getRequestSentListFailure(error.message))
    }
}

export function* getRequestSentListSaga() {
    yield takeLatest(GET_REQUEST_SENT_LIST_REQUEST, request)
}