import { StyleSheet, Dimensions } from 'react-native';
import { colors, sizes } from '../../../config/theme';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  inputContainer: {
    width: width - sizes.margin,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: sizes.borderRadius,
  },
  input: {
    flex: 1,
  },
  searchIcon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
});

export default styles;
