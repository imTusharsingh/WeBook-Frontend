import { put, call, takeLatest, select } from "redux-saga/effects"

import { getMessage } from "../../Api/messageApi"
import { getMessageSuccess, getMessageFailure } from "./action"


import { GET_MESSAGE_REQUEST } from "../../Types"


function* getRequest(action) {
    try {
        const state = yield select();
        const token = state.auth.data.token;

        const res = yield call(getMessage, token, action.payload)
        yield put(getMessageSuccess(res))
    } catch (error) {
        yield put(getMessageFailure(error.message))
    }
}

export function* getMessageSaga() {
    yield takeLatest(GET_MESSAGE_REQUEST, getRequest)
}