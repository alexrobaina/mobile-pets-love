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
        isRequired
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
        isRequired
        isSecureText
        name="password"
        label={t('password')}
        placeholder="Password"
        value={password.value}
        error={password.error}
        validationType={PASSWORD}
        hasError={password.hasError}
        handleChange={handleChange}
      />
    </>
  );
};

export default LoginFormInputs;
