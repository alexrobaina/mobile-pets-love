import React, { FC } from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

interface Props {
  children: string;
  style: object;
}

const AppText: FC<Props> = ({ children, style }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: 'tomato',
    fontSize: 50,
  },
  ...Platform.select({
    ios: {
      fontSize: 20,
    },
    android: {
      fontSize: 18,
    },
  }),
});

export default AppText;
