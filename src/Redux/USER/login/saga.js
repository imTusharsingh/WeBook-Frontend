import { call, put, takeLatest } from "redux-saga/effects";
import { LOGIN_USER_REQUEST } from "../../Types";
import { loginUser } from "../../Api/UserApi"
import { loginUserSuccess, loginUserFailure } from "./action"


import { decodeToken } from "react-jwt"
import { setAuthUser, authUserError } from '../../AuthUser/index';



function* sendData(action) {
    try {
        const data = yield call(loginUser, action.payload)

        const token = data.token;
        const myDecodedToken = decodeToken(token)

        if (!myDecodedToken) {
            yield put(authUserError("Unauthorized"))
        }
        else {
            const userDetail = {
                _id: myDecodedToken._id,
                name: myDecodedToken.name,
                iat: myDecodedToken.iat,
                exp: myDecodedToken.exp,
                token
            }
            yield put(setAuthUser(userDetail))
            yield put(loginUserSuccess(data))
        }

    } catch (error) {
        yield put(loginUserFailure(error.message))
    }
}

export function* loginSaga() {
    yield takeLatest(LOGIN_USER_REQUEST, sendData)
}