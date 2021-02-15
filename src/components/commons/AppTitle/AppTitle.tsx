import React, { FC } from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

interface Props {
  text: string;
}

const AppTitle: FC<Props> = ({ text }) => {
  return <Text style={styles.title}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: 'red',
    fontFamily: 'lato-blod',
    ...Platform.select({
      ios: {
        marginTop: 25,
        fontSize: 40,
      },
      android: {
        marginTop: 70,
        AfontSize: 38,
      },
    }),
  },
});

export default AppTitle;
