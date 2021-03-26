import React, { useCallback, useReducer } from 'react';
import { StyleSheet, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AppButton from 'components/commons/AppButton';
import AppTitle from 'components/commons/AppTitle';
import {
  formsReducer,
  validateInput,
  onInputChange,
  INPUT_INITIAL_STATE,
} from 'utils/inputInitialReducer';
import { signIn } from '../../store/slices/auth/auth';
import Layout from 'components/commons/Layout';
import { useTranslation } from 'react-i18next';
import WrapperInputs from 'components/commons/WrapperInputs';
import Input from 'components/commons/Input';
import { EMAIL, PASSWORD } from 'utils/validations/validationType';

const initialState = {
  email: INPUT_INITIAL_STATE,
  password: INPUT_INITIAL_STATE,
};

const Login = () => {
  const [formState, dispatchReducer] = useReducer(formsReducer, initialState);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleChangeEmail = useCallback((text) => {
    onInputChange('email', EMAIL, text, dispatchReducer, true, false);
  }, []);

  const handleChangePassword = useCallback((text) => {
    onInputChange('password', PASSWORD, text, dispatchReducer, true, false);
  }, []);

  const { loading } = useSelector((state: any) => state.auth);

  const handleLogin = () => {
    const isValid = validateInput(formState);
    console.log(isValid);

    dispatch(signIn({ email, password }));
  };

  const { email, password } = formState;
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
      <WrapperInputs
        as={Input}
        name="email"
        label="Email"
        value={email.value}
        error={email.error}
        hasError={email.hasError}
        handleChange={handleChangeEmail}
        placeholder="shelterpets@email.com"
      />
      <WrapperInputs
        as={Input}
        isSecureText
        name="password"
        label="Password"
        placeholder="Password"
        value={password.value}
        error={password.error}
        hasError={password.hasError}
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
