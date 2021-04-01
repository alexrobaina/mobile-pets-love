import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { useSelector } from 'react-redux';
import AppTitle from 'components/commons/AppTitle';
import { signIn } from '../../store/slices/auth/auth';
import Layout from 'components/commons/Layout';
import { useTranslation } from 'react-i18next';
import Form from 'components/commons/Form';
import FormInputs from './InputsForm';

export const INPUT_INITIAL_STATE = {
  type: '',
  error: '',
  value: '',
  touched: false,
  hasError: false,
  isFormValid: true,
  hasValidation: false,
};

const initialState = {
  email: INPUT_INITIAL_STATE,
  password: INPUT_INITIAL_STATE,
};

const Login = () => {
  const { t } = useTranslation();

  const { loading } = useSelector((state: any) => state.auth);

  if (loading) {
    return <AppTitle text={t('loading')} />;
  }

  return (
    <Layout>
      <AppTitle text={t('login')} />
      <Image
        source={require('../../assets/images/noteBookShelter.png')}
        style={styles.image}
      />
      <Form
        handleSubmit={signIn}
        initialState={initialState}
        formComponentsInputs={FormInputs}
      />
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

export default Login;

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
