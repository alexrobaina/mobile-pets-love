import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import PetCreation from 'screens/PetCreation';
import Login from 'screens/Login';
import Register from 'screens/Register';
import 'utils/i18n';
import store from './store';
import colors from 'styles/colors';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="PetCreation" component={PetCreation} />
  </Stack.Navigator>
);

const PetsLoveTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white,
  },
};

const App = () => {
  // This can be refator!! :D ==> Convert charger fonts in a component
  let [fontsLoaded] = useFonts({
    'lato-blod': require('./assets/fonts/Lato-Bold.ttf'),
    'lato-regular': require('./assets/fonts/Lato-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer theme={PetsLoveTheme}>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default registerRootComponent(App);
