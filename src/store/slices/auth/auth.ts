import { createSlice, createAction } from '@reduxjs/toolkit';
const sliceName = 'auth';

export const initialState = {
  user: {},
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    authStart(state) {
      state.user = {};
      state.error = null;
      state.loading = true;
    },
    authSuccess(state, { payload }) {
      state.user = payload.userData;
      state.loading = false;
    },
    authFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    cleanErrors(state) {
      state.user = {};
      state.loading = false;
      state.error = null;
    },
  },
});

const { actions, reducer } = authSlice;

export const { authStart, authSuccess, authFailure, cleanErrors } = actions;

export const signIn = createAction<{ email: string; password: string }>(
  `${sliceName}/signIn`,
);

export default reducer;
