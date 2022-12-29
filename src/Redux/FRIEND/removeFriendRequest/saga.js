import { put, call, takeLatest, select } from "redux-saga/effects"

import { getFriendRequestSentList, removeFriendRequest } from "../../Api/friendApi"

import { removeFriendRequestSuccess, removeFriendRequestFailure } from "./action"

import { REMOVE_FRIEND_REQUEST_REQUEST } from "../../Types"
import { getRequestSentListSuccess } from "../getFriendRequestSentList/action"

function* request(action) {
    try {
        const state = yield select();
        const token = state.auth.data.token
        const message = yield call(removeFriendRequest, token, action.payload)
        yield put(removeFriendRequestSuccess(message))
        const sentRequests = yield call(getFriendRequestSentList, token)
        yield put(getRequestSentListSuccess(sentRequests))
    } catch (error) {
        yield put(removeFriendRequestFailure(error.message))
    }
}

export function* removeFriendRequestSaga() {
    yield takeLatest(REMOVE_FRIEND_REQUEST_REQUEST, request)
}
