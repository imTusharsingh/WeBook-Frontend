import { put, call, takeLatest, select } from "redux-saga/effects"

import { getConversation } from "../../Api/conversationApi"
import { getFriendsList } from "../../Api/friendApi"
import { getConversationSuccess, getConversationFailure } from "./action"
import { getFriendsListSuccess } from "../../FRIEND/getFriendList/action"

import { GET_CONVERSATION_REQUEST } from "../../Types"


function* getRequest(action) {
    try {
        const state = yield select();
        const token = state.auth.data.token;

        const conversations = yield call(getConversation, token)
        yield put(getConversationSuccess(conversations))
        const friends = yield call(getFriendsList, token)
        yield put(getFriendsListSuccess(friends))


    } catch (error) {
        yield put(getConversationFailure(error.message))
    }
}

export function* getConversationSaga() {
    yield takeLatest(GET_CONVERSATION_REQUEST, getRequest)
}