import { put, call, takeLatest, select } from "redux-saga/effects";

import { getPost, uploadPost } from "../../Api/PostApi";

import { uploadPostSuccess, uploadPostFailure } from "./action";

import { UPLOAD_POST_REQUEST } from '../../Types';
import { getPostSuccess } from "../getPost/action";

function* sendRequest(action) {
    try {

        const state = yield select();
        const token = state.auth.data.token
        const message = yield call(uploadPost, token, action.payload);
        yield put(uploadPostSuccess(message))
        const posts = yield call(getPost, token);
        yield put(getPostSuccess(posts))
    } catch (error) {
        yield put(uploadPostFailure(error.message))
    }
}

export function* uploadPostSaga() {
    yield takeLatest(UPLOAD_POST_REQUEST, sendRequest)
}