import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../config/theme';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  inputContainer: {
    width: width - 25,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
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
