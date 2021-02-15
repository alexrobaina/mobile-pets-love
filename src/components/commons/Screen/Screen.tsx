import React, { FC, ReactNode } from 'react';
import Constants from 'expo-constants';
import { StyleSheet, SafeAreaView } from 'react-native';

interface Props {
  children: ReactNode;
}

const Screen: FC<Props> = ({ children }) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;
