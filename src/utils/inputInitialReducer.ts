import {
  EMAIL,
  REQUIRED,
  PASSWORD,
  PASSWORD_EDIT,
  CONFIRM_PASSWORD,
} from './validations/validationType';
import Validation from 'utils/validations/Validation';

export const INPUT_INITIAL_STATE = {
  value: '',
  error: '',
  type: '',
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
      touched,
      hasError,
      error: '',
      type: type,
    },
  });
};

// Check values and make validation inputs
export const formsReducer = (state, action) => {
  const { name, value, hasError, error, touched, type } = action.data;

  // switch (action.type) {
  //   case EMAIL:
  // here goes the code validation inputs
  return {
    ...state,
    // update the state of the particular field,
    // by retaining the state of other fields
    [name]: { ...state[name], value, hasError, error, touched, type },
  };
  // default:
  //   return state;
  // }
};

export const validateInput = async (store) => {
  console.log('store', store);

  const validation = new Validation();
  let hasError = false;
  switch (store.email.type) {
    case REQUIRED:
      // falta codigo
      break;
    case EMAIL:
      validation.setTypeValidation(EMAIL);

      try {
        const result = await validation.checkValidation(store.email.value);
        console.log(result);
      } catch (e) {
        store.email.error = e.message;
        return false;
      }
    case PASSWORD:
      validation.setTypeValidation(PASSWORD);
      try {
        await validation.checkValidation(store.value);
      } catch (e) {
        store.error = e.message;
        console.log('error', store.error);

        return false;
      }
    case PASSWORD_EDIT:
      // write code
      break;
    case CONFIRM_PASSWORD:
      // write code
      break;
    case 'terms':
      // write code
      break;
    default:
      break;
  }
  return { hasError };
};
