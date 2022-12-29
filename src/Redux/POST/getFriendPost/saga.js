import { put, call, takeLatest, select } from "redux-saga/effects";

import { getFriendPosts } from "../../Api/PostApi";

import { getFriendsPostSuccess, getFriendsPostFailure } from "./action";

import { GET_FRIENDS_POST_REQUEST } from '../../Types';

function* sendRequest(action) {
    try {
        const state = yield select();
        const token = state.auth.data.token


        const posts = yield call(getFriendPosts, token, action.payload);
        yield put(getFriendsPostSuccess(posts))
    } catch (error) {
        yield put(getFriendsPostFailure(error.message))
    }
}

export function* getFriendsPostSaga() {
    yield takeLatest(GET_FRIENDS_POST_REQUEST, sendRequest)
}

