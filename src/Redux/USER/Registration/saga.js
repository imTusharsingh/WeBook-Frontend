import { call, put, takeLatest } from "redux-saga/effects";
import { REGISTER_USER_REQUEST } from "../../Types";
import { registerUser } from "../../Api/UserApi"
import { registerUserSuccess, registerUserFailure } from "./action"



function* sendRegisterUserData(action) {
    try {
        yield call(registerUser, action.payload)
        yield put(registerUserSuccess())
    } catch (error) {
        yield put(registerUserFailure(error.message))
    }
}

export function* registerationSaga() {
    yield takeLatest(REGISTER_USER_REQUEST, sendRegisterUserData)
}