import { put, call, takeLatest, select } from "redux-saga/effects"

import { acceptFriendRequest, getFriendsList } from "../../Api/friendApi"

import { acceptFriendSuccess, acceptFriendFailure } from "./action"

import { getFriendRequestList } from "../../Api/friendApi"

import { getRequestListSuccess } from "../getFriendRequestList/action"

import { ACCEPT_FRIEND_REQUEST_REQUEST } from "../../Types"
import { getFriendsListSuccess } from "../getFriendList/action"

function* request(action) {
    try {
        const state = yield select();
        const token = state.auth.data.token
        const message = yield call(acceptFriendRequest, token, action.payload)
        yield put(acceptFriendSuccess(message))
        const requests = yield call(getFriendRequestList, token)
        yield put(getRequestListSuccess(requests))
        const friends = yield call(getFriendsList, token)
        yield put(getFriendsListSuccess(friends))
    } catch (error) {
        yield put(acceptFriendFailure(error.message))
    }
}

export function* acceptFriendSaga() {
    yield takeLatest(ACCEPT_FRIEND_REQUEST_REQUEST, request)
}
