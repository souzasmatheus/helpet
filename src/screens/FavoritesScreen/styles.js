import { StyleSheet } from 'react-native';
import { colors } from '../../../config/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    paddingBottom: 10,
  },
});

export default styles;
