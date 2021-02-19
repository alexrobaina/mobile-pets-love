import React, { useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';
import AppTitle from 'components/commons/AppTitle';
import Layout from 'components/commons/Layout';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import AppButton from 'components/commons/AppButton';
import InputStore from 'stores/InputStore';
import WrapperInputs from 'components/commons/WrapperInputs';
import { EMAIL, REQUIRED } from 'utils/validations/typeValidations';
import Input from 'components/commons/Input';

const Login = () => {
  const { t } = useTranslation();
  let email = new InputStore(EMAIL);
  let password = new InputStore(REQUIRED);

  const handleChangeEmail = useCallback((text) => {
    email.setValue(text);
  }, []);

  const handleChangePassword = useCallback((text) => {
    password.setValue(text);
  }, []);

  // ESTO NO ANDA....
  const handleViewPassword = useCallback(() => {}, []);

  const handleLogin = useCallback(() => {
    email.validate();
    password.validate();
  }, []);

  return (
    <Layout>
      <AppTitle text={t('login')} />
      <WrapperInputs
        as={Input}
        label="Email"
        inputStore={email}
        placeholder="Email"
        handleChange={handleChangeEmail}
      />
      <WrapperInputs
        as={Input}
        isSecureText
        label="Password"
        inputStore={password}
        placeholder="Password"
        handleViewSecureText={handleViewPassword}
        handleChange={handleChangePassword}
      />
      <AppButton title={t('login')} handlePress={handleLogin} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: 20,
    width: 'auto',
    height: 300,
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 10,
  },
});

export default observer(Login);

// This functions is for change language.

{
  /* <Button onPress={() => onChangeLang('en')} title="en" />
<Button onPress={() => onChangeLang('es')} title="es" />  */
}

// const onChangeLang = useCallback((lang) => {
//   i18n.changeLanguage(lang === 'en' ? 'en' : 'es').then(() => {
//     if (I18nManager.isRTL) {
//       I18nManager.forceRTL(i18n.language === 'es');
//       RNRestart.Restart();
//     }
//   });
// }, []);
