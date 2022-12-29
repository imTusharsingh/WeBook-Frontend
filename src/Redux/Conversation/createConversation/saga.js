import { put, call, takeLatest, select } from "redux-saga/effects"

import { createConversation, getConversation } from "../../Api/conversationApi"

import { createConversationSuccess, createConversationFailure } from "./action"

import { CREATE_CONVERSATION_REQUEST } from "../../Types"
import { getConversationSuccess } from "../getConversation/action";



function* createRequest(action) {
    try {
        const state = yield select();
        const token = state.auth.data.token
        const message = yield call(createConversation, token, action.payload)
        yield put(createConversationSuccess(message))
        const conversations = yield call(getConversation, token)
        yield put(getConversationSuccess(conversations))

    } catch (error) {
        yield put(createConversationFailure(error.message))
    }
}

export function* createConversationSaga() {
    yield takeLatest(CREATE_CONVERSATION_REQUEST, createRequest)
}