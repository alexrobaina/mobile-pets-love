import React, { useCallback } from 'react';
import { Button, StyleSheet } from 'react-native';
import AppTitle from 'components/commons/AppTitle';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import Layout from 'components/commons/Layout';
import NOTE_BOOK_SHELTER from '../../assets/images/noteBookShelter.png';

const Register = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const goToLogin = useCallback(() => {
    navigation.navigate('Login');
  }, []);

  return (
    <Layout>
      <AppTitle>{t('register')}</AppTitle>
      <Button title={t('goToLogin')} onPress={goToLogin} />
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
});

export default Register;
