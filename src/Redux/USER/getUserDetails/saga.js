import { call, takeLatest, put, select } from "redux-saga/effects"
import { getUser } from "../../Api/UserApi"
import { GET_USER_REQUEST } from "../../Types"
import { getUserSuccess, getUserFailure } from "./action"

function* getUserData(action) {
    try {
        const state = yield select();
        const token = state.auth.data.token
        const userData = yield call(getUser, token, action.payload)
        yield put(getUserSuccess(userData))
    } catch (error) {
        yield put(getUserFailure(error.message))
    }
}

export function* getUserSaga() {
    yield takeLatest(GET_USER_REQUEST, getUserData)
}