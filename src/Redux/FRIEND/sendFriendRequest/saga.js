import { put, call, takeLatest, select } from "redux-saga/effects"

import { getFriendRequestSentList, sendFriendRequest } from "../../Api/friendApi"

import { sendFriendFailure, sendFriendSuccess } from "./action"

import { SEND_FRIEND_REQUEST } from "../../Types"
import { getRequestSentListSuccess } from "../getFriendRequestSentList/action"

function* request(action) {
    try {
        const state = yield select();
        const token = state.auth.data.token
        const message = yield call(sendFriendRequest, token, action.payload)
        yield put(sendFriendSuccess(message))
        const sentRequests = yield call(getFriendRequestSentList, token)
        yield put(getRequestSentListSuccess(sentRequests))
    } catch (error) {
        yield put(sendFriendFailure(error.message))
    }
}

export function* sendFriendSaga() {
    yield takeLatest(SEND_FRIEND_REQUEST, request)
}