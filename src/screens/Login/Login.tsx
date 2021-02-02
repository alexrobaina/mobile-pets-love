import React, { useCallback } from 'react';
import { StyleSheet, Image, Button, I18nManager } from 'react-native';
import AppTitle from 'components/commons/AppTitle';
import { useNavigation, useRoute } from '@react-navigation/native';
import NOTE_BOOK_SHELTER from '../../assets/images/noteBookShelter.png';
import Layout from 'components/commons/Layout';
import { AsyncStorage } from 'react-native';
import RNRestart from 'react-native-restart';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t, i18n } = useTranslation();
  const route = useRoute();
  const navigation = useNavigation();

  const goToRegister = useCallback(() => {
    navigation.navigate('Register');
  }, []);

  const onChangeLang = useCallback((lang) => {
    i18n.changeLanguage(lang === 'en' ? 'en' : 'es').then(() => {
      if (I18nManager.isRTL) {
        I18nManager.forceRTL(i18n.language === 'es');
        RNRestart.Restart();
      }
    });
  }, []);

  return (
    <Layout>
      <AppTitle>{t('login')}</AppTitle>
      <Button style={styles.button} onPress={() => onChangeLang('en')} title="en" />
      <Button onPress={() => onChangeLang('es')} title="es" />
      <Image style={styles.image} source={NOTE_BOOK_SHELTER} />
      <Button style={styles.button} title="Test navegation" onPress={goToRegister} />
    </Layout>
  );
};

const styles = StyleSheet.create({
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
