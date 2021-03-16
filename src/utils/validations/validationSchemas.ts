import i18next from 'i18next';
import * as yup from 'yup';

const emailValidation = yup.object().shape({
  value: yup
    .string()
    .email(() => i18next.t('field_email'))
    .required(() => i18next.t('field_required')),
});

const requiredValidation = yup.object().shape({
  value: yup.string().required(() => i18next.t('field_required')),
});

const passwordValidation = yup.object().shape({
  value: yup
    .string()
    .required(() => i18next.t('field_required'))
    .min(8, 'Debe Ingresar minimo 8 caracteres'),
});

const confirmPasswordValidation = yup.object({
  password: yup.string(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Las contraseñas no son iguales.'),
});

const confirmPasswordEditValidation = yup.object({
  value: yup.string().min(8, 'Debe ingresar minimo 8 caracteres.'),
});

export default {
  emailValidation,
  requiredValidation,
  passwordValidation,
  confirmPasswordValidation,
  confirmPasswordEditValidation,
};
