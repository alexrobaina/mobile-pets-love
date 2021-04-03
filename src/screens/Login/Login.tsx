import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { useSelector } from 'react-redux';
import AppTitle from 'components/commons/AppTitle';
import { signIn } from '../../store/slices/auth/auth';
import Layout from 'components/commons/Layout';
import { useTranslation } from 'react-i18next';
import Form from 'components/commons/Form';
import LoginFormInputs from './LoginFormInputs';

// este initial state se va a un archivo de constantes en la carpeta utils
export const INPUT_INITIAL_STATE = {
  name: '',
  type: '',
  error: '',
  value: '',
  touched: false,
  hasError: false,
  isRequired: false,
};

const initialState = {
  email: { ...INPUT_INITIAL_STATE, isRequired: true },
  password: { ...INPUT_INITIAL_STATE, isRequired: true },
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
        formComponentsInputs={LoginFormInputs}
      />
    </Layout>
  );
};

// los stylos va a ir en un archivo .ts dentro de la misma carpeta
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

// ESTA FUNCION TAMBIEN PODRIA SER UN HELPER EN LA PARTE UTILS
// const onChangeLang = useCallback((lang) => {
//   i18n.changeLanguage(lang === 'en' ? 'en' : 'es').then(() => {
//     if (I18nManager.isRTL) {
//       I18nManager.forceRTL(i18n.language === 'es');
//       RNRestart.Restart();
//     }
//   });
// }, []);
