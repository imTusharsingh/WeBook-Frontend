import { put, takeLatest, call, select } from "redux-saga/effects";
import { searchUser } from "../../Api/UserApi"
import { SEARCH_USER_REQUEST } from "../../Types";
import { searchUserSuccess, searchUserFailure } from "./action";

function* searchUsers(action) {
    try {
        const state = yield select();
        const token = state.auth.data.token
        const data = yield call(searchUser, token, action.payload)
        yield put(searchUserSuccess(data))
    } catch (error) {
        yield put(searchUserFailure(error.message))
    }

}

export function* searchUserSaga() {
    yield takeLatest(SEARCH_USER_REQUEST, searchUsers)
}