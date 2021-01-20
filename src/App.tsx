import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import { SafeAreaView, Text } from 'react-native';
import { registerRootComponent } from 'expo';
import Login from './screens/Login';

const App = () => {
  return (
    <SafeAreaView>
      <Login></Login>
    </SafeAreaView>
  );
};

export default registerRootComponent(App);
