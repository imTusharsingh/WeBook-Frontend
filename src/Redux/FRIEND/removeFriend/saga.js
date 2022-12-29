import { put, call, takeLatest, select } from "redux-saga/effects"

import { removeFriend } from "../../Api/friendApi"

import { removeFriendSuccess, removeFriendFailure } from "./action"

import { getFriendsList } from "../../Api/friendApi"

import { getFriendsListSuccess } from "../getFriendList/action"

import { REMOVE_FRIEND_REQUEST } from "../../Types"

function* request(action) {
    try {
        const state = yield select();
        const token = state.auth.data.token
        const message = yield call(removeFriend, token, action.payload)
        yield put(removeFriendSuccess(message))
        const friends = yield call(getFriendsList, token)
        yield put(getFriendsListSuccess(friends))
    } catch (error) {
        yield put(removeFriendFailure(error.message))
    }
}

export function* removeFriendSaga() {
    yield takeLatest(REMOVE_FRIEND_REQUEST, request)
}
