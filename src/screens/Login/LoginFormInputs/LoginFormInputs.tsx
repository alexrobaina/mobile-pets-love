import React from 'react';
import { useTranslation } from 'react-i18next';
import WrapperInputs from 'components/commons/WrapperInputs';
import Input from 'components/commons/Input';
import { EMAIL, PASSWORD } from 'utils/validations/validationType';

const LoginFormInputs = ({ formState, handleChange }) => {
  const { t } = useTranslation();

  const { email, password } = formState;

  return (
    <>
      <WrapperInputs
        as={Input}
        name="email"
        label={t('email')}
        value={email.value}
        error={email.error}
        validationType={EMAIL}
        hasError={email.hasError}
        handleChange={handleChange}
        placeholder="shelterpets@email.com"
      />
      <WrapperInputs
        as={Input}
        isSecureText
        name="password"
        label={t('password')}
        placeholder="Password"
        value={password.value}
        error={password.error}
        validationType={PASSWORD}
        handleChange={handleChange}
        hasError={password.hasError}
      />
    </>
  );
};

export default LoginFormInputs;
