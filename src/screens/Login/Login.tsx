import React from 'react';
import { Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import AppTitle from 'components/commons/AppTitle';
import Layout from 'components/commons/Layout';
import Form from 'components/commons/Form';
import { INPUT_INITIAL_STATE } from '../../contants/baseInitialState';
import { signIn } from '../../store/slices/auth/auth';
import LoginFormInputs from './LoginFormInputs';
import styles from './login.styles';

const initialState = {
  // If you want the field to be required is necesary set isRequired in true and
  // set isRequired in form LoginFormInputs
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
    <ScrollView>
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
    </ScrollView>
  );
};

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
