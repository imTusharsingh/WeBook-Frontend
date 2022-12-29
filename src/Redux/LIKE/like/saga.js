import { put, call, select, takeEvery } from "redux-saga/effects"

import { like } from "../../Api/LikeApi"

import { likeSuccess, likeFailure } from "./action"

import { LIKE_REQUEST } from "../../Types"
import { getFriendsPostSuccess } from "../../POST/getFriendPost/action"
import { getFriendPosts, getPost } from "../../Api/PostApi"
import { getPostSuccess } from "../../POST/getPost/action"

function* likeRequest(action) {
    try {
        const state = yield select();
        const token = state.auth.data.token
        const message = yield call(like, token, action.payload.postId)
        yield put(likeSuccess(message))
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
        yield put(likeFailure(error.message))
    }
}

export function* likeSaga() {
    yield takeEvery(LIKE_REQUEST, likeRequest)
}