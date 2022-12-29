import { put, call, takeLatest, select } from "redux-saga/effects"

import { editComment } from "../../Api/commentApi"

import { editCommentSuccess, editCommentFailure } from "./actions"

import { EDIT_COMMENT_REQUEST } from "../../Types"
import { getFriendPosts, getPost } from "../../Api/PostApi"
import { getFriendsPostSuccess } from "../../POST/getFriendPost/action"
import { getPostSuccess } from "../../POST/getPost/action"

function* editRequest(action) {
    try {
        const state = yield select();
        const token = state.auth.data.token
        const message = yield call(editComment, token, action.payload.commentdata)
        yield put(editCommentSuccess(message))
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
        yield put(editCommentFailure(error.message))
    }
}

export function* editCommentSaga() {
    yield takeLatest(EDIT_COMMENT_REQUEST, editRequest)
}