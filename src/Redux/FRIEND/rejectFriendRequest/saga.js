import { put, call, takeLatest, select } from "redux-saga/effects"

import { rejectFriendRequest } from "../../Api/friendApi"

import { rejectFriendSuccess, rejectFriendFailure } from "./action"

import { getFriendRequestList } from "../../Api/friendApi"

import { getRequestListSuccess } from "../getFriendRequestList/action"

import { REJECT_FRIEND_REQUEST_REQUEST } from "../../Types"

function* request(action) {
    try {
        const state = yield select();
        const token = state.auth.data.token
        const message = yield call(rejectFriendRequest, token, action.payload)
        yield put(rejectFriendSuccess(message))
        const requests = yield call(getFriendRequestList, token)
        yield put(getRequestListSuccess(requests))
    } catch (error) {
        yield put(rejectFriendFailure(error.message))
    }
}

export function* rejectFriendSaga() {
    yield takeLatest(REJECT_FRIEND_REQUEST_REQUEST, request)
}