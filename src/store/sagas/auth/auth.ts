// =============================
// Dependencies
import { takeLatest, put, call } from 'redux-saga/effects';

// Actions
import { signIn, authStart, authSuccess, authFailure } from '../../slices/auth/auth';

// Api
import { login } from '../../api/auth/auth';

export function* signInWorker({ payload }) {
  console.log('payload', payload);

  try {
    // Todas las acciones de redux que alteral el estado van put el resto call
    yield put(authStart());
    // const result = yield call(login, payload);
    yield put(authSuccess({ result: '' }));
  } catch (error) {
    console.log(error);

    yield put(authFailure(error));
  }
}

export default function* authSagasRoot() {
  yield takeLatest(signIn, signInWorker);
}
