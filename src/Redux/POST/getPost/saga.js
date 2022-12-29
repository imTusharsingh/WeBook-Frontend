import { put, call, takeLatest, select } from "redux-saga/effects";

import { getPost } from "../../Api/PostApi";

import { getPostSuccess, getPostFailure } from "./action";

import { GET_POST_REQUEST } from '../../Types';

function* sendRequest(action) {
    try {
        const state = yield select();
        const token = state.auth.data.token
        const posts = yield call(getPost, token, action.payload);
        yield put(getPostSuccess(posts))
    } catch (error) {
        yield put(getPostFailure(error.message))
    }
}

export function* getPostSaga() {
    yield takeLatest(GET_POST_REQUEST, sendRequest)
}

