import { put, call, takeLatest, select } from "redux-saga/effects"

import { createMessage, getMessage } from "../../Api/messageApi"

import { createMessageSuccess, createMessageFailure } from "./action"

import { CREATE_MESSAGE_REQUEST } from "../../Types"
import { getMessageSuccess } from "../getMessage/action";


function* createRequest(action) {
    try {
        console.log(action.payload)
        const state = yield select();
        const token = state.auth.data.token
        const res = yield call(createMessage, token, action.payload)
        yield put(createMessageSuccess(res))
        const messages = yield call(getMessage, token, action.payload.conversationId)
        yield put(getMessageSuccess(messages))


    } catch (error) {
        yield put(createMessageFailure(error.message))
    }
}

export function* createMessageSaga() {
    yield takeLatest(CREATE_MESSAGE_REQUEST, createRequest)
}