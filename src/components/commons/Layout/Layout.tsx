import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
  children: string;
  style?: object;
}

const Layout: FC<Props> = ({ children, style }) => {
  return <View style={styles.containerLayout}>{children}</View>;
};

const styles = StyleSheet.create({
  containerLayout: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Layout;
