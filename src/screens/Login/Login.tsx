import React, { useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';
import AppTitle from 'components/commons/AppTitle';
import Layout from 'components/commons/Layout';
import { observer } from 'mobx-react-lite';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import AppButton from 'components/commons/AppButton';
import InputStore from 'stores/InputStore';
import WrapperInputs from 'components/commons/WrapperInputs';
import Input from 'components/commons/Input';
import colors from 'styles/colors';

const EMAIL = 'email';
const REQUIRED = 'required';

const Login = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const { t } = useTranslation();
  let email = new InputStore(EMAIL);
  let password = new InputStore(REQUIRED);

  const handleChangeEmail = useCallback((text) => {
    email.setValue(text);
  }, []);

  const handleChangePassword = useCallback((text) => {
    password.setValue(text);
  }, []);

  const handleViewPassword = useCallback(() => {
    setSecureTextEntry(!secureTextEntry);
  }, []);

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
      <TouchableOpacity style={styles.password} onPress={handleViewPassword}>
        <Ionicons name="eye-outline" size={24} color={colors.primary.light} />
      </TouchableOpacity>
      <WrapperInputs
        as={Input}
        label="Password"
        inputStore={password}
        placeholder="Password"
        secureTextEntry={secureTextEntry}
        handleChange={handleChangePassword}
      />
      <AppButton title="Login" handlePress={handleLogin} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
  },
  password: {
    zIndex: 50,
    position: 'absolute',
    marginTop: 160,
    right: 20,
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
