import { put, call, takeLatest, select } from "redux-saga/effects";

import { getPost, updatePost } from "../../Api/PostApi";

import { updatePostSuccess, updatePostFailure } from "./action";

import { UPDATE_POST_REQUEST } from '../../Types';
import { getPostSuccess } from "../getPost/action";

function* sendRequest(action) {
    try {
        const state = yield select();
        const token = state.auth.data.token
        const message = yield call(updatePost, token, action.payload);
        yield put(updatePostSuccess(message))
        const posts = yield call(getPost, token);
        yield put(getPostSuccess(posts))
    } catch (error) {
        yield put(updatePostFailure(error.message))
    }
}

export function* updatePostSaga() {
    yield takeLatest(UPDATE_POST_REQUEST, sendRequest)
}