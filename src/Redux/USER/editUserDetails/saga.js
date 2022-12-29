import { call, takeLatest, put, select } from "redux-saga/effects"
import { editUser } from "../../Api/UserApi"
import { EDIT_USER_REQUEST } from "../../Types"
import { editUserSuccess, editUserFailure } from "./action"
import { getUser } from "../../Api/UserApi"
import { getUserSuccess } from "../getUserDetails/action"

function* sendEditUserData(action) {
    try {
        const state = yield select();
        const token = state.auth.data.token
        const data = yield call(editUser, token, action.payload)
        yield put(editUserSuccess(data))
        const userData = yield call(getUser, token)
        yield put(getUserSuccess(userData))
    } catch (error) {
        yield put(editUserFailure(error.message))
    }
}

export function* editUserSaga() {
    yield takeLatest(EDIT_USER_REQUEST, sendEditUserData)
}