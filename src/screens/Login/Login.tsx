import React, { useCallback } from 'react';
import { StyleSheet, Image, Test } from 'react-native';
import AppTitle from 'components/commons/AppTitle';
import Layout from 'components/commons/Layout';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import AppButton from 'components/commons/AppButton';
import InputStore from 'stores/InputStore';
import AuthStore from 'stores/AuthStore';
import WrapperInputs from 'components/commons/WrapperInputs';
import { EMAIL, REQUIRED } from 'utils/validations/validationType';
import Input from 'components/commons/Input';

const Login = () => {
  const authStore = useLocalObservable(() => new AuthStore());
  const { t } = useTranslation();

  const handleChangeEmail = useCallback((text) => {
    authStore.email.setValue(text);
  }, []);

  const handleChangePassword = useCallback((text) => {
    authStore.password.setValue(text);
  }, []);

  const handleLogin = useCallback(() => {
    authStore.login();
  }, []);

  const handleViewPassword = useCallback(() => {
    alert('login');
  }, []);

  const { email, password, isLoading } = authStore;

  if (isLoading) {
    return <AppTitle text={t('loading')} />;
  }

  return (
    <Layout>
      <AppTitle text={t('login')} />
      <Image
        source={require('../../assets/images/noteBookShelter.png')}
        style={styles.image}
      />
      <WrapperInputs
        as={Input}
        label="Email"
        inputStore={email}
        placeholder="Email"
        value={email.value}
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
