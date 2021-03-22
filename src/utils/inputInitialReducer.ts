import { validateYupSchema } from 'formik';
import i18next from 'i18next';
import * as yup from 'yup';

import {
  EMAIL,
  REQUIRED,
  PASSWORD,
  PASSWORD_EDIT,
  CONFIRM_PASSWORD,
} from './validations/validationType';

export const INPUT_INITIAL_STATE = {
  value: '',
  error: '',
  touched: false,
  hasError: false,
  isFormValid: true,
};

// This function save in the store values from any input
export const onInputChange = (
  name: string,
  type: string,
  value: string,
  dispatch: any,
  touched: boolean,
  hasError: boolean,
) => {
  dispatch({
    type: type,
    data: {
      name,
      value,
      error: '',
      touched,
      hasError,
    },
  });
};

// // validations with YUP
// const emailValidation = yup.object().shape({
//   value: yup
//     .string()
//     .email(() => i18next.t('field_email'))
//     .required(() => i18next.t('field_required')),
// });

// const requiredValidation = yup.object().shape({
//   value: yup.string().required(() => i18next.t('field_required')),
// });

// const passwordValidation = yup.object().shape({
//   value: yup
//     .string()
//     .required(() => i18next.t('field_required'))
//     .min(8, 'Debe Ingresar minimo 8 caracteres'),
// });

// const confirmPasswordValidation = yup.object({
//   password: yup.string(),
//   confirmPassword: yup
//     .string()
//     .oneOf([yup.ref('password'), null], 'Las contraseñas no son iguales.'),
// });

// const confirmPasswordEditValidation = yup.object({
//   value: yup.string().min(8, 'Debe ingresar minimo 8 caracteres.'),
// });

// const validationEmail = async (value) => {
//   await emailValidation.validate({ value });
// };

// Check values and make validation inputs
export const formsReducer = (state, action) => {
  const { name, value, hasError, error, touched } = action.data;
  switch (action.type) {
    case EMAIL:
      validateInput(EMAIL, value);
      // here goes the code validation inputs
      return {
        ...state,
        // update the state of the particular field,
        // by retaining the state of other fields
        [name]: { ...state[name], value, hasError, error, touched },
      };
    default:
      return state;
  }
};

export const validateInput = (type, value) => {
  let hasError = false;
  switch (type) {
    case 'name':
      value.error = '';
      if (value.trim() === '') {
        value.hasError = true;
        value.error = 'Name cannot be empty';
      } else if (!/^[a-zA-Z ]+$/.test(value)) {
        value.hasError = true;
        value.error = 'Invalid Name. Avoid Special characters';
      } else {
        value.hasError = false;
        value.error = '';
      }
      break;
    case 'email':
      value = '';
      value = 'Email cannot be empty';

      // if (value.trim() === '') {
      //   error = 'Email cannot be empty';
      // } else
      if (
        !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
          value,
        )
      ) {
        hasError = true;
        value.error = 'Invalid Email';
      } else {
        hasError = false;
        value.error = '';
      }
      break;
    case 'password':
      if (value.trim() === '') {
        value.hasError = true;
        value.error = 'Password cannot be empty';
      } else if (value.trim().length < 8) {
        value.hasError = true;
        value.error = 'Password must have at least 8 characters';
      } else {
        value.hasError = false;
        value.error = '';
      }
      break;
    case 'mobile':
      if (value.trim() === '') {
        value.hasError = true;
        value.error = 'Mobile cannot be empty';
      } else if (!/^[0-9]{10}$/.test(value)) {
        value.hasError = true;
        value.error = 'Invalid Mobile Number. Use 10 digits only';
      } else {
        value.hasError = false;
        value.error = '';
      }
      break;
    case 'terms':
      if (!value) {
        value.hasError = true;
        value.error = 'You must accept terms and conditions';
      } else {
        value.hasError = false;
        value.error = '';
      }
      break;
    default:
      break;
  }
  return { hasError };
};
