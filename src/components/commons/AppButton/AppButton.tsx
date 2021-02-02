import React, { FC } from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

interface Props {
  children: string;
  style: object;
}

const AppButton: FC<Props> = ({ children, style }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: 'tomato',
    fontFamily: 'lato-regular',
    ...Platform.select({
      ios: {
        fontSize: 40,
      },
      android: {
        fontSize: 18,
      },
    }),
  },
});

export default AppButton;
