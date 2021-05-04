import { StyleSheet, Platform } from 'react-native';

const styles = (width) =>
  StyleSheet.create({
    container: {
      width,
      height: 380,
    },
    title: {
      ...Platform.select({
        ios: {
          marginTop: -70,
        },
        android: {
          marginTop: -50,
        },
      }),
      height: 150,
    },
    description: {
      ...Platform.select({
        ios: {
          marginTop: -5,
        },
        android: {
          marginTop: -40,
        },
      }),
    },
    image: {
      flex: 1,
    },
  });

export default styles;
