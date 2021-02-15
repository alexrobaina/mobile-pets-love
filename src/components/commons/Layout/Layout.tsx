import React, { FC, ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return <View style={styles.containerLayout}>{children}</View>;
};

const styles = StyleSheet.create({
  containerLayout: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Layout;
