import { put, call, takeLatest, select } from "redux-saga/effects"

import { getFriendsList } from "../../Api/friendApi"

import { getFriendsListSuccess, getFriendsListFailure } from "./action"

import { GET_FRIENDS_LIST_REQUEST } from "../../Types"

function* request(action) {
    try {
        const state = yield select();
        const token = state.auth.data.token
        const friends = yield call(getFriendsList, token, action.payload)
        yield put(getFriendsListSuccess(friends))
    } catch (error) {
        yield put(getFriendsListFailure(error.message))
    }
}

export function* getFriendsListSaga() {
    yield takeLatest(GET_FRIENDS_LIST_REQUEST, request)
}