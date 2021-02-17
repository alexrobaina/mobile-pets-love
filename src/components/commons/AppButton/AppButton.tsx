import React, { FC } from 'react';
import { StyleSheet, Platform, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from 'styles/colors';

interface Props {
  title: string;
  handlePress: () => void;
}

const AppButton: FC<Props> = ({ title, handlePress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary.backgroundColor,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
  },
  text: {
    color: colors.primary.text,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontFamily: 'lato-regular',
    ...Platform.select({
      ios: {
        fontSize: 18,
      },
      android: {
        fontSize: 18,
      },
    }),
  },
});

export default AppButton;
