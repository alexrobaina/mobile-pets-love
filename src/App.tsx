import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import Login from 'screens/Login';
import Register from 'screens/Register';
import 'utils/i18n';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
);

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
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default registerRootComponent(App);
