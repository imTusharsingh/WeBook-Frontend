import { put, call, takeLatest, select } from "redux-saga/effects"

import { getFriendRequestList } from "../../Api/friendApi"

import { getRequestListSuccess, getRequestListFailure } from "./action"

import { GET_REQUEST_LIST_REQUEST } from "../../Types"

function* request(action) {
    try {
        const state = yield select();
        const token = state.auth.data.token
        const requests = yield call(getFriendRequestList, token, action.payload)
        yield put(getRequestListSuccess(requests))
    } catch (error) {
        yield put(getRequestListFailure(error.message))
    }
}

export function* getRequestListSaga() {
    yield takeLatest(GET_REQUEST_LIST_REQUEST, request)
}