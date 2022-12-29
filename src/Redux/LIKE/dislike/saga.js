import { put, call, select, takeEvery } from "redux-saga/effects"

import { dislike } from "../../Api/LikeApi"

import { dislikeSuccess, dislikeFailure } from "./actions"

import { DISLIKE_REQUEST } from "../../Types"
import { getFriendsPostSuccess } from "../../POST/getFriendPost/action"
import { getFriendPosts, getPost } from "../../Api/PostApi"
import { getPostSuccess } from "../../POST/getPost/action"

function* dislikeRequest(action) {
    try {

        const state = yield select();
        const token = state.auth.data.token
        const message = yield call(dislike, token, action.payload.postId)
        yield put(dislikeSuccess(message))
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
        yield put(dislikeFailure(error.message))
    }
}

export function* dislikeSaga() {
    yield takeEvery(DISLIKE_REQUEST, dislikeRequest)
}