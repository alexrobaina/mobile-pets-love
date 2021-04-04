import validationSchemas from '../../../utils/validations/validationSchemas';
import { EMAIL, PASSWORD } from '../../../utils/validations/validationType';

export const formsReducer = (state, action) => {
  let { name, value, hasError, error, touched, type, isRequired } = action.data;

  switch (action.type) {
    case EMAIL:
      const validationEmail = validationSchemas.emailValidation(value, isRequired);
      hasError = validationEmail?.hasError;
      error = validationEmail?.errorMessage;

      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          hasError,
          error,
          touched,
          type,
          isRequired,
        },
      };
    case PASSWORD:
      let validationPassword = validationSchemas.passwordValidation(value, isRequired);
      hasError = validationPassword?.hasError;
      error = validationPassword?.errorMessage;
      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          hasError,
          error,
          touched,
          type,
          isRequired,
        },
      };
    default:
      return state;
  }
};
