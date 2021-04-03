// Leer documentación también.
import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './slices/auth/auth';

export default combineReducers({
  auth: authReducer,
});
