import React, { FC } from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import colors from 'styles/colors';

interface Props {
  text: string;
}

const AppText: FC<Props> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: colors.primary.text,
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
