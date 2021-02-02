import React, { FC } from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

interface Props {
  children: string;
  style: object;
}

const AppTitle: FC<Props> = ({ children, style }) => {
  return <Text style={styles.title}>{children}</Text>;
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
        fontSize: 38,
      },
    }),
  },
});

export default AppTitle;
