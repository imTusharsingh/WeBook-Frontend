import { put, call, takeLatest, select } from "redux-saga/effects";

import { deletePost, getPost } from "../../Api/PostApi";

import { deletePostSuccess, deletePostFailure } from "./action";

import { DELETE_POST_REQUEST } from '../../Types';

import { getPostSuccess } from '../getPost/action'

function* sendRequest(action) {
    try {
        const state = yield select();
        const token = state.auth.data.token
        const message = yield call(deletePost, token, action.payload);
        yield put(deletePostSuccess(message))
        const posts = yield call(getPost, token);
        yield put(getPostSuccess(posts))
    } catch (error) {
        yield put(deletePostFailure(error.message))
    }
}

export function* deletePostSaga() {
    yield takeLatest(DELETE_POST_REQUEST, sendRequest)
}