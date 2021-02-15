import React, { useCallback } from 'react';
import { StyleSheet, Image, Button, I18nManager } from 'react-native';
import AppTitle from 'components/commons/AppTitle';
import { useNavigation } from '@react-navigation/native';
import Layout from 'components/commons/Layout';
import RNRestart from 'react-native-restart';
import { useTranslation } from 'react-i18next';
import NOTE_BOOK_SHELTER from '../../assets/images/noteBookShelter.png';
import AppButton from 'components/commons/AppButton';

const Login = () => {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();

  const goToRegister = useCallback(() => {
    navigation.navigate('Register');
  }, []);

  const goToPetCreation = useCallback(() => {
    navigation.navigate('PetCreation');
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
      <AppTitle text={t('login')} />
      <Button onPress={() => onChangeLang('en')} title="en" />
      <Button onPress={() => onChangeLang('es')} title="es" />
      <Image style={styles.image} source={NOTE_BOOK_SHELTER} />
      <AppButton title="Test navegation" handlePress={goToRegister} />
      <Button title="Pet creation" onPress={goToPetCreation} />
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
