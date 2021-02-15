import React, { FC } from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

interface Props {
  text: string;
}

const AppText: FC<Props> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
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

export default AppText;
