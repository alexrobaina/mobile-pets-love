import React, { useCallback } from 'react';
import { Button, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import Layout from 'components/commons/Layout';

const Register = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const goToLogin = useCallback(() => {
    navigation.navigate('Login');
  }, []);

  return (
    <Layout>
      <Button title={t('goToLogin')} onPress={goToLogin} />
    </Layout>
  );
};

export default Register;
