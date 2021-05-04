import React, { useCallback } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { slides } from './contants/sliders';
import { useNavigation } from '@react-navigation/native';
import AppButton from 'components/commons/AppButton';
import Layout from 'components/commons/Layout';
import AppCarousel from 'components/commons/AppCarousel/AppCarousel';

const WelcomeApp = () => {
  const navigation = useNavigation();

  const goToRegister = useCallback(() => {
    navigation.navigate('Register');
  }, []);

  const goToLogin = useCallback(() => {
    navigation.navigate('Login');
  }, []);

  return (
    <SafeAreaView>
      <AppCarousel slides={slides} />
      <Layout>
        <AppButton handlePress={goToLogin} title="Iniciar sesion" />
        <AppButton handlePress={goToRegister} title="Registrarme" />
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WelcomeApp;
