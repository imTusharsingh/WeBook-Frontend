import { put, call, takeLatest, select } from "redux-saga/effects";

import { getPostById } from "../../Api/PostApi";

import { getPostByIdSuccess, getPostByIdFailure } from "./action";

import { GET_POST_BY_ID_REQUEST } from '../../Types';

function* sendRequest(action) {
    try {
        const state = yield select();
        const token = state.auth.data.token
        const post = yield call(getPostById, token, action.payload);
        yield put(getPostByIdSuccess(post))
    } catch (error) {
        yield put(getPostByIdFailure(error.message))
    }
}

export function* getPostByIdSaga() {
    yield takeLatest(GET_POST_BY_ID_REQUEST, sendRequest)
}