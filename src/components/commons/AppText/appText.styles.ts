import { StyleSheet, Platform } from 'react-native';
import colors from 'styles/colors';

const styles = StyleSheet.create({
  text: {
    color: colors.primary.text,
    fontFamily: 'lato-regular',
    ...Platform.select({
      ios: {
        fontSize: 20,
      },
      android: {
        fontSize: 18,
      },
    }),
  },
  center: {
    textAlign: 'center',
  },
});

export default styles;
