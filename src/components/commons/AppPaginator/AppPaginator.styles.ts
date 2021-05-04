import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';

const styles = StyleSheet.create({
  containerPaginator: { alignItems: 'center' },
  alignDots: { flex: 1, flexDirection: 'row' },
  containerDot: {
    alignContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 15,
    backgroundColor: colors.primary.border,
    margin: 4,
  },
  selected: {
    width: 15,
  },
});

export default styles;
