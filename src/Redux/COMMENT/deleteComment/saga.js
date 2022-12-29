import { put, call, takeLatest, select } from "redux-saga/effects"

import { deleteComment } from "../../Api/commentApi"

import { deleteCommentSuccess, deleteCommentFailure } from "./actions"

import { DELETE_COMMENT_REQUEST } from "../../Types"
import { getFriendPosts, getPost } from "../../Api/PostApi"
import { getFriendsPostSuccess } from "../../POST/getFriendPost/action"
import { getPostSuccess } from "../../POST/getPost/action"

function* deleteRequest(action) {
    try {
        const state = yield select();
        const token = state.auth.data.token
        const message = yield call(deleteComment, token, action.payload.commentdata)
        yield put(deleteCommentSuccess(message))
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
        yield put(deleteCommentFailure(error.message))
    }
}

export function* deleteCommentSaga() {
    yield takeLatest(DELETE_COMMENT_REQUEST, deleteRequest)
}