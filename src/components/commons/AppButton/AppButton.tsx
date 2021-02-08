import React, { FC } from 'react';
import { StyleSheet, Platform, Button } from 'react-native';
import colors from 'styles/colors';

interface Props {
  title: string;
  handlePress: () => void;
}

const AppButton: FC<Props> = ({ title, handlePress }) => {
  return <Button title={title} onPress={handlePress} />;
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
