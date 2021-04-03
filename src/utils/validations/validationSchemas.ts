import i18next from 'i18next';

const emailValidation = (email: string, isRequired: boolean) => {
  const regularExpretion = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValid = regularExpretion.test(String(email).toLowerCase());

  if (email === undefined && isRequired) {
    return {
      hasError: true,
      errorMessage: i18next.t('field_required'),
    };
  }

  if (isValid) {
    return {
      hasError: false,
      errorMessage: '',
    };
  }

  return {
    hasError: true,
    errorMessage: i18next.t('field_email'),
  };
};

const passwordValidation = (password: string, isRequired: boolean) => {
  if (password === undefined && isRequired) {
    return {
      hasError: true,
      errorMessage: i18next.t('field_required'),
    };
  }
  return {
    hasError: false,
    errorMessage: '',
  };
};

export default {
  emailValidation,
  passwordValidation,
};

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
