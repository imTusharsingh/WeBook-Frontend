import { put, call, takeLatest, select } from "redux-saga/effects"

import { addComment } from "../../Api/commentApi"

import { addCommentSuccess, addCommentFailure } from "./actions"

import { ADD_COMMENT_REQUEST } from "../../Types"
import { getFriendPosts, getPost } from "../../Api/PostApi"
import { getFriendsPostSuccess } from "../../POST/getFriendPost/action"
import { getPostSuccess } from "../../POST/getPost/action"

function* addRequest(action) {
    try {
        const state = yield select();
        const token = state.auth.data.token
        const message = yield call(addComment, token, action.payload.commentdata)
        yield put(addCommentSuccess(message))
        if (action.payload.isSelfPosts) {
            const Posts = yield call(getPost, token);
            yield put(getPostSuccess(Posts))
        } else if (action.payload.id) {
            const Posts = yield call(getPost, token, action.payload.id);
            yield put(getPostSuccess(Posts))
        }
        else {
            const posts = yield call(getFriendPosts, token, action.payload.limit);
            yield put(getFriendsPostSuccess(posts))
        }

    } catch (error) {
        yield put(addCommentFailure(error.message))
    }
}

export function* addCommentSaga() {
    yield takeLatest(ADD_COMMENT_REQUEST, addRequest)
}