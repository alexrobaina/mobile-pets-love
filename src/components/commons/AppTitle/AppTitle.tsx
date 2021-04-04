import React, { FC } from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import colors from 'styles/colors';

interface Props {
  text: string;
}

const AppTitle: FC<Props> = ({ text }) => {
  return <Text style={styles.title}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: colors.primary.title,
    fontFamily: 'lato-blod',
    ...Platform.select({
      ios: {
        marginTop: 100,
        fontSize: 40,
      },
      android: {
        marginTop: 70,
        fontSize: 38,
      },
    }),
  },
});

export default AppTitle;
