// =============================
// Dependencies
import { takeLatest, put, call } from 'redux-saga/effects';

// Actions
import { signIn, authStart, authSuccess, authFailure } from '../../slices/auth/auth';

// Api
import { login } from '../../api/auth/auth';

export function* signInWorker({ payload }) {
  const data = {
    email: payload.email.value,
    password: payload.password.value,
  };

  try {
    yield put(authStart());
    const result = yield call(login, data);

    yield put(authSuccess({ result }));
  } catch (error) {
    console.log(2, error.response.data.message);

    yield put(authFailure(error.response.data.message));
  }
}

export default function* authSagasRoot() {
  yield takeLatest(signIn, signInWorker);
}
