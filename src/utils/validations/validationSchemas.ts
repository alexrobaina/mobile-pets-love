import i18next from 'i18next';
import * as yup from 'yup';

const emailValidation = yup.object().shape({
  value: yup
    .string()
    .email(() => i18next.t('field_required'))
    .required(() => i18next.t('field_email')),
});

const requiredValidation = yup.object().shape({
  value: yup.string().required(() => i18next.t('field_required')),
});

export default { emailValidation, requiredValidation };
